import requests

class OpenAI:
    def __init__(self, **kwargs):
        self.api_key = **kwargs

    def send(self, text, model="gpt-5"):
        url = "https://api.openai.com/v1/responses"

        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

        payload = {
            "model": model,
            "input": text
        }

        response = requests.post(url, headers=headers, json=payload)
        data = response.json()

        return data["output_text"]