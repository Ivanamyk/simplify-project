import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSimplify = async () => {
    if (!inputText.trim()) return
    setIsLoading(true);

    try {
    const response = await fetch('http://localhost:5000/api/simplify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText }),
    });

    if (!response.ok) {
      throw new Error('Failed to simplify text');
    }
    const data = await response.json();
    setResult(data.simplifiedText);

  } catch (error) {
    console.error('Error:', error);
    setResult('Error: Could not simplify text. Make sure the Python server is running on port 5000.');
  }
   finally {
    setIsLoading(false);
  }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="title">Text Simplifier</h1>
          <p className="subtitle">Make complex text easy to understand</p>
        </div>
      </header>

      <main className="container">
        <div className="content">
          <div className="input-section">
            <label htmlFor="input" className="label">
              Enter your text
            </label>
            <textarea
              id="input"
              className="textarea"
              placeholder="Enter complex text, articles, documentation, or any content you want simplified..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isLoading}
            />
            <div className="char-count">{inputText.length} characters</div>
          </div>

          <button
            className="simplify-btn"
            onClick={handleSimplify}
            disabled={isLoading || !inputText.trim()}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Simplifying...
              </>
            ) : (
              "Simplify Text"
            )}
          </button>

          {result && (
            <div className="output-section">
              <label className="label">Simplified Explanation</label>
              <div className="output">{result}</div>
              <button
                className="copy-btn"
                onClick={() => navigator.clipboard.writeText(result)}
              >
                Copy
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
