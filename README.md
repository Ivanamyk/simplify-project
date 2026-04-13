# Text Simplifier

A modern full-stack web application that simplifies complex text into easy-to-understand language using AI.

## Features

- 🚀 Clean, modern React UI with real-time text simplification
- 🐍 Python Flask backend with REST API
- 🤖 Claude AI integration for intelligent text processing
- ⚡ Async/await for smooth, responsive user experience
- 📱 Mobile-friendly responsive design
- 🎨 Beautiful gradient UI with smooth animations

**Frontend:**
- React 19
- Vite (build tool)
- CSS3 with animations

**Backend:**
- Python Flask
- Flask-CORS (cross-origin support)
- Anthropic Claude API

**Communication:**
- REST API with fetch
- JSON request/response format

## Project Structure
simplify_project/
├── simplify-project/ (React Frontend)
│ ├── src/
│ │ ├── App.jsx (Main component)
│ │ ├── App.css (Styling)
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
│
├── backend/ (Python Backend)
│ ├── app.py (Flask server)
│ ├── requirements.txt (Dependencies)
│ ├── .env (API key)
│ └── .gitignore
│
└── SETUP.md (Detailed setup guide)

## Quick Start

### Prerequisites

- Node.js (v18+)
- Python (v3.8+)
- Anthropic API key ([get one here](https://console.anthropic.com/))

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate it
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt
