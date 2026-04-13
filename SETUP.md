# Text Simplifier - Full Stack Setup

This project has two parts: a React frontend and a Python Flask backend that communicate with each other.

## Project Structure

```
simplify_project/
├── simplify-project/        (React Frontend - Port 5173)
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/                 (Python Flask Backend - Port 5000)
│   ├── app.py
│   ├── requirements.txt
│   └── venv/               (will be created)
└── README.md
```

---

## Setup Instructions

### 1. Set Up Python Backend

**First time only:**

```powershell
# Navigate to backend folder
cd backend

# Create a virtual environment (Python 3.8+)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

**Run the backend:**

```powershell
# Make sure venv is activated (you should see (venv) in your terminal)
# If not, activate it with: venv\Scripts\activate

# Start Flask server
python app.py
```

You should see:

```
 * Running on http://127.0.0.1:5000
```

---

### 2. Set Up React Frontend (in a NEW terminal)

**First time only:**

```powershell
# Navigate to React project
cd simplify-project

# Install dependencies
npm install
```

**Run the frontend:**

```powershell
# Start React dev server
npm run dev
```

You should see:

```
  VITE v8.x.x ready in xxx ms
  ➜  Local:   http://localhost:5173/
```

---

## How to Use

1. **Start Backend** (Terminal 1):

   ```powershell
   cd backend
   venv\Scripts\activate
   python app.py
   ```

2. **Start Frontend** (Terminal 2):

   ```powershell
   cd simplify-project
   npm run dev
   ```

3. **Open in Browser**: Go to `http://localhost:5173/`

4. **Type text** and click "Simplify Text" - it will send to the Python backend and return the result!

---

## How It Works (Architecture)

### Frontend (React) → Backend (Flask) Communication:

```
React (Port 5173)
    ↓
    | Makes HTTP POST request to:
    ↓
http://localhost:5000/api/simplify
    ↓
Python Flask Server (Port 5000)
    ↓
    | Receives text, processes it
    ↓
    | Returns simplified text as JSON
    ↓
React displays result
```

---

## Modifying the Backend

The `simplify_text()` function in `app.py` is where your agent logic goes.

**Current code (placeholder):**

```python
def simplify_text(text):
    simplified = f"Simplified version of: {text[:50]}..." if len(text) > 50 else f"Simplified: {text}"
    return simplified
```

**Replace with your actual agent call:**

```python
def simplify_text(text):
    # Call your agent/AI API here
    response = your_agent.simplify(text)
    return response.simplified_text
```

---

## Troubleshooting

**"Connection refused" error?**

- Make sure Python server is running (check Terminal 1)
- Make sure it says "Running on http://127.0.0.1:5000"

**"Module not found" error?**

- Make sure virtual environment is activated (see `(venv)` prefix in terminal)
- Make sure you ran `pip install -r requirements.txt`

**CORS errors?**

- Flask-CORS is already enabled in `app.py` - this allows React to communicate with Python

---

## Stopping Servers

- **Frontend**: Ctrl+C in Terminal 2
- **Backend**: Ctrl+C in Terminal 1
- **Deactivate venv**: Type `deactivate` (optional)

Enjoy! 🚀
