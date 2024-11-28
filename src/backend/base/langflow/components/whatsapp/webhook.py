import json

from langflow.custom import Component
from langflow.io import MultilineInput, Output, SecretStrInput, IntInput
from langflow.schema import Data
from langflow.schema.message import Message
from .WAMessage import WAMessage


class WhatsAppWebhookComponent(Component):
    display_name = "WhatsApp Webhook"
    description = "Defines a webhook input for the flow."
    name = "WhatsAppWebhook"
    icon = "whatsapp"

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
        ),
    ]
    outputs = [
        Output(display_name="Data",
               name="output_data", method="build_data"),
        Output(display_name="Status",
               name="output_status", method="build_status"),
    ]

    def _pre_run_setup(self):
        self.__iteration_updated = False

    def iterate_and_stop_once(self, route_to_stop: str):
        if not self.__iteration_updated:
            self.update_ctx({f"{self._id}_iteration": self.ctx.get(
                f"{self._id}_iteration", 0) + 1})
            self.__iteration_updated = True
            if self.ctx.get(f"{self._id}_iteration", 0) >= self.max_iterations and route_to_stop == self.default_route:
                # We need to stop the other route
                route_to_stop = "output_data" if route_to_stop == "output_status" else "output_status"
            self.stop(route_to_stop)
            print(f"Stopping {route_to_stop}")

    def format_message(self, message: dict) -> dict:
        """
        Adds the message type to the message payload using WAMessage class.
        # Reference to message payloads
        # https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples/
        """
        wa_message = WAMessage(message)
        output_message = wa_message.format()
        print(f"Output Message: {output_message}")
        return output_message

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

        print("body")
        print(body)

        message = self.format_message(body)
        return message

    def build_status(self) -> Data:
        message = self.process_message()
        # if there is only changes, it's an event, so don't pass it forward
        if message.get("message_type") == "status":
            print(f"Build Status output_status")
            self.status = message
            self.iterate_and_stop_once("output_status")
            return Data(data=message)
        print(f"Build Status output_data")
        self.iterate_and_stop_once("output_data")
        return Data(data=message)

    def build_data(self) -> Data:
        message = self.process_message()
        # if there is only changes, it's an event, so don't pass it forward
        if message.get("message_type") == "text":
            print(f"Build Data output_status")
            self.status = message
            self.iterate_and_stop_once("output_status")
            return Data(data=message)
        print(f"Build Data output_data")
        self.iterate_and_stop_once("output_data")
        return Data(data=message)
