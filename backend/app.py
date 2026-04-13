from dotenv import load_dotenv
import os
from anthropic import Anthropic
from flask import Flask, request, jsonify
from flask_cors import CORS

load_dotenv()
client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
model = "claude-haiku-4-5"

app = Flask(__name__)

CORS(app)

def simplify_text(text, system="Simplify the following text into easy-to-understand language and be funny about it. "
"Don't be verbose. Just provide a simple explanation but don't add any unnecessary information."):

    try:

        def chat(messages, system=None, temperature=1.0):
            params = {
                "model": model,
                "max_tokens": 1000,
                "temperature": temperature,
                "messages": [
                    {
                        "role": "user",
                        "content": text
                    }
                ]
            }

            if system:
                params["system"] = system

            message = client.messages.create(**params)
            return message.content[0].text
        
        messages = []
        
        answer = chat(messages, system=system)

        return answer
    
    except Exception as e:
        return f"Error simplifying text: {str(e)}"

@app.route('/api/simplify', methods=['POST'])
def simplify():

    try:
        data = request.json
        text = data.get('text', '')
        
        if not text:
            return jsonify({'error': 'No text provided'}), 400
        
        # Call your simplification logic
        simplified_text = simplify_text(text)
        
        return jsonify({'simplifiedText': simplified_text}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    # Run on port 5000
    # Debug=True means it auto-reloads when you save changes
    app.run(debug=True, port=5000)
