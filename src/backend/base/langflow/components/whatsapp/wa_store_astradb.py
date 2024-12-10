import json
from http import HTTPStatus
from typing import Any

import requests
from langchain.pydantic_v1 import BaseModel, Field, create_model
from langchain_core.tools import StructuredTool

from langflow.base.langchain_utilities.model import LCToolComponent, Component
from langflow.io import DictInput, IntInput, SecretStrInput, StrInput, DataInput, Output, MessageInput
from langflow.schema import Data

class WhatsAppMessageStoreAstraDBComponent(Component):
    display_name: str = "Astra DB - Message Store"
    description: str = "Store WhatsApp messages in Astra DB"
    documentation: str = "https://astra.datastax.com"
    icon: str = "AstraDB"

    inputs = [
        DataInput(name="wa_event", display_name="Data",
                  info="WhatsApp message data to store in Astra DB."),
        StrInput(
            name="keyspace",
            display_name="Keyspace",
            value="default_keyspace",
            info="The keyspace name within Astra DB where the data is stored.",
            required=True,
        ),
        StrInput(
            name="table_name",
            display_name="Table Name",
            info="The name of the table within Astra DB where the data is stored.",
            required=True,
        ),
        SecretStrInput(
            name="token",
            display_name="Astra DB Application Token",
            info="Authentication token for accessing Astra DB.",
            value="ASTRA_DB_APPLICATION_TOKEN",
            required=True,
        ),
        StrInput(
            name="api_endpoint",
            display_name="API Endpoint",
            info="API endpoint URL for the Astra DB service.",
            value="ASTRA_DB_API_ENDPOINT",
            required=True,
        )
    ]
    
    outputs = [
        Output(display_name="Result", name="result", method="run_store_data"),
    ]

    """
    Astra DB API - Table Model
    
    {'messaging_product': 'whatsapp', 
    'display_phone_number': '15551676618', 
    'phone_number_id': '530665446786809', 
    'message_type': 'text', 
    'from': '5511992945404', 
    'id': 'wamid.HBgNNTUxMTk5Mjk0NTQwNBUCABIYFjNFQjBEOTAwNkQ1RDQ2QzQwMDFGQkYA', 
    'timestamp': '1732727211', 
    'text': 'v1', 
    'type': 'text'}
    
    {'messaging_product': 'whatsapp', 
    'display_phone_number': '15551676618', 
    'phone_number_id': '530665446786809', 
    'message_type': 'status', 
    'id': 'wamid.HBgNNTUxMTk5Mjk0NTQwNBUCABEYEjUzOEYyMDJENkQwNTMyNEEwOAA=',
    'sent': '1732727213'}
    
    CREATE TABLE wa_messages (
        recipient_id TEXT,
        message_id TEXT,
        messaging_product  TEXT STATIC,
        phone_number_id  TEXT STATIC,
        display_phone_number  TEXT STATIC,
        wa_id TEXT,
        wa_name TEXT,
        message_text text,
        created_at TIMESTAMP,
        sent TIMESTAMP,
        delivered TIMESTAMP,
        read TIMESTAMP,
        PRIMARY KEY ((recipient_id), message_id)
    );
    """

    def store_data(self):
        print("Storing message in Astra DB")
        headers = {"Accept": "application/json",
                   "X-Cassandra-Token": f"{self.token}"}
        astra_url = f"{self.api_endpoint}/api/rest/v2/keyspaces/{self.keyspace}/{self.table_name}/"
        
        
        print("WA Event")
        print(self.wa_event)
        
        body = self.wa_event.data
        
        print("WA Body")
        print(body)
        
        if "recipient_id" not in body:
            print("Recipient ID not found")
            return {"status_code": 400, "message": "Recipient ID not found"}
            
        url = f'{astra_url}{"/".join([body["recipient_id"], body["message_id"]])}'
        
        body.pop("recipient_id")
        body.pop("message_id")
        
        if "text" in body:
            body["message_text"] = body.pop("text")
        
        res = requests.request("PATCH", url=url, headers=headers, timeout=10, json=body)        
        response = res.json()
        print("Astra DB Response")
        print(response)
        return {"status_code": res.status_code, "message": response}

    def run_store_data(self) -> Data:
        print("Running Astra DB Message Store")
        results = self.store_data()
        res: Data = Data(data=results)
        self.status = res
        return res
