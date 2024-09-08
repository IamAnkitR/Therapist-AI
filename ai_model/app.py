from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load a pre-trained emotion detection model
classifier = pipeline("text-classification", model="bhadresh-savani/distilbert-base-uncased-emotion")

@app.route('/api/detect-emotion', methods=['POST'])
def detect_emotion():
    data = request.json
    text = data.get('text', '')
    results = classifier(text)
    emotion = results[0]['label']
    return jsonify({'emotion': emotion})

@app.route('/health', methods=['GET'])
def health():
    return 'Service is up and running'

if __name__ == '__main__':
    app.run(port=5000, debug=True)
