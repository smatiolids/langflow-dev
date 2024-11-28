from typing import Dict, Optional
from pydantic import BaseModel
from datetime import datetime

class MessageBase(BaseModel):
    """Base message structure shared by all message types"""
    messaging_product: str
    message_type: str
    recipient_id: str
    message_id: str
    created_at: datetime
    display_phone_number: Optional[str] = None
    phone_number_id: Optional[str] = None

class TextMessage(MessageBase):
    """Structure for text messages"""
    message_type: str = "text"
    text: str

class ReactionMessage(MessageBase):
    """Structure for reaction messages"""
    message_type: str = "reaction"
    emoji: str
    message_id_reacted_to: str

class StatusMessage(MessageBase):
    """Structure for status messages"""
    message_type: str = "status"
    status_timestamp: datetime
    status: str

class WAMessage:
    """Handles WhatsApp webhook message formatting and validation"""

    def __init__(self, raw_message: Dict):
        self.raw_message = raw_message
        self.src_message = self._extract_source_message()
        self._initialize_metadata()

    def _extract_source_message(self) -> Dict:
        """Safely extracts the source message from the webhook payload"""
        if not self.raw_message.get("entry"):
            raise ValueError("Missing 'entry' in message")
        if not self.raw_message["entry"][0].get("changes"):
            raise ValueError("Missing 'changes' in entry")
        if not self.raw_message["entry"][0]["changes"][0].get("value"):
            raise ValueError("Missing 'value' in changes")

        return self.raw_message["entry"][0]["changes"][0]["value"]

    def _initialize_metadata(self) -> None:
        """Initialize common metadata"""
        self.metadata = {
            "messaging_product": self.src_message["messaging_product"],
            "display_phone_number": self.src_message["metadata"].get("display_phone_number"),
            "phone_number_id": self.src_message["metadata"].get("phone_number_id")
        }

    def _handle_status(self) -> Optional[StatusMessage]:
        """Process status type messages"""
        if self.src_message.get("statuses"):
            status = self.src_message["statuses"][0]
            return StatusMessage(
                **self.metadata,
                recipient_id=status["recipient_id"],
                message_id=status["id"],
                created_at=datetime.fromtimestamp(int(status["timestamp"])),
                status=status["status"],
                status_timestamp=datetime.fromtimestamp(int(status["timestamp"]))
            )
        return None

    def _handle_reaction(self, message: Dict) -> ReactionMessage:
        """Process reaction type messages"""
        return ReactionMessage(
            **self.metadata,
            recipient_id=message["from"],
            message_id=message["id"],
            created_at=datetime.fromtimestamp(int(message["timestamp"])),
            emoji=message["reaction"]["emoji"],
            message_id_reacted_to=message["reaction"]["message_id"]
        )

    def _handle_text(self, message: Dict) -> TextMessage:
        """Process text messages"""
        return TextMessage(
            **self.metadata,
            recipient_id=message["from"],
            message_id=message["id"],
            created_at=datetime.fromtimestamp(int(message["timestamp"])),
            text=message["text"]["body"]
        )

    def _handle_messages(self) -> Optional[MessageBase]:
        """Process text and reaction messages"""
        if self.src_message.get("messages"):
            message = self.src_message["messages"][0]
            if message["type"] == "text":
                return self._handle_text(message)
            elif message["type"] == "reaction":
                return self._handle_reaction(message)
        return None

    def format(self) -> Dict:
        """Format and validate the message"""
        message = self._handle_status() or self._handle_messages()
        
        if message is None:
            raise ValueError("Invalid message type")

        return message.model_dump()
