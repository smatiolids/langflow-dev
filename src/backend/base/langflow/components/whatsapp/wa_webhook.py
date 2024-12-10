import json
from datetime import datetime, timezone

from langflow.custom import Component
from langflow.io import MultilineInput, Output, IntInput
from langflow.schema import Data


class WhatsAppWebhookComponent(Component):
    display_name = "WhatsApp Webhook"
    description = "Defines a webhook input for the flow."
    name = "WhatsAppWebhook1"
    icon = "whatsapp"
    default_route = "output_events"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__iteration_updated = False

    inputs = [
        MultilineInput(
            name="data",
            display_name="Payload",
            info="Receives a payload from external systems via HTTP POST.",
        ),
        IntInput(
            name="max_iterations",
            display_name="Max Iterations",
            info="The maximum number of iterations for the conditional router.",
            value=10,
            advanced=True
        )
    ]

    outputs = [
        Output(display_name="Text Message",
               name="output_message", method="build_message"),
        Output(display_name="Events",
               name="output_events", method="build_events"),
    ]

    def process_message(self):
        if not self.data:
            self.status = "No data provided."
            return Data(data={})
        try:
            body = json.loads(self.data or "{}")
        except json.JSONDecodeError:
            body = {"payload": self.data}
            message = f"Invalid JSON payload. Please check the format.\n\n{self.data}"
            self.status = message
            return self.data

        self.raw_message = body
        self.src_message = self._extract_source_message(body)
        self.message = self.format_message(self.src_message)

    def format_message(self, src_message: dict):
        message = {
            "messaging_product": src_message["messaging_product"],
            "display_phone_number": src_message["metadata"].get("display_phone_number"),
            "phone_number_id": src_message["metadata"].get("phone_number_id")
        }

        if src_message.get("contacts"):
            message.update({
                "wa_name": src_message["contacts"][0]["profile"]["name"],
                "wa_id": src_message["contacts"][0]["wa_id"]
            })

        if src_message.get("statuses"):
            status = src_message["statuses"][0]
            message.update({
                "recipient_id": status["recipient_id"],
                "message_id": status["id"],
            })
            message[status["status"]] = datetime.fromtimestamp(
                int(status["timestamp"]), tz=timezone.utc
            ).strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z"

        if self.src_message.get("messages"):
            msg = self.src_message["messages"][0]
            message.update(
                {"recipient_id": msg["from"],
                 "message_id": msg["id"],
                 "created_at": datetime.fromtimestamp(
                     int(msg["timestamp"]), tz=timezone.utc
                ).strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z",
                }
            )
            if msg["type"] == "text":
                message.update(
                    {"text": msg["text"]["body"]}
                )
            elif msg["type"] == "reaction":
                print("Reaction")
                print(msg)
                emoji = msg["reaction"]["emoji"].encode(
                    'utf-8').decode('utf-8')
                message.update({
                    "emoji": emoji,
                    "message_id": msg["reaction"]["message_id"],
                    "reacted":  datetime.fromtimestamp(
                        int(msg["timestamp"]), tz=timezone.utc
                    ).strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z",
                })
        return message

    def _extract_source_message(self, body: dict):
        """Safely extracts the source message from the webhook payload"""
        if not body.get("entry"):
            raise ValueError("Missing 'entry' in message")
        if not body["entry"][0].get("changes"):
            raise ValueError("Missing 'changes' in entry")
        if not body["entry"][0]["changes"][0].get("value"):
            raise ValueError("Missing 'value' in changes")

        return body["entry"][0]["changes"][0]["value"]

    def build_events(self) -> Data:
        self.process_message()
        self.status = self.message
        return Data(data=self.message)

    def build_message(self) -> Data:
        self.process_message()
        if "text" in self.message:
            return Data(data=self.message)

        self.stop("output_message")
        return None  # type: ignore[return-value]
