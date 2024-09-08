import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const analyzeEmotion = async () => {
    try {
      const res = await axios.post("/api/detect-emotion", { text });
      setResponse(res.data.emotion);
    } catch (error) {
      console.error("Error analyzing emotion:", error);
    }
  };

  return (
    <div className="App">
      <h1>Therapist AI</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Talk to the therapist..."
      />
      <button onClick={analyzeEmotion}>Analyze Emotion</button>
      <p>Detected Emotion: {response}</p>
    </div>
  );
}

export default App;
