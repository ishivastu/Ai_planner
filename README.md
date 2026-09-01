# 🌍 WanderCraft - AI Dynamic Trip Planner

An interactive, AI-native trip generator built with React (Vite) and Express (Node.js). The application takes free-form trip descriptions, invokes Google Gemini via structured schema generation, and parses the output into an editable, interactive UI where users can expand, reorder, add, and remove stops.

---

## 🚀 Setup & Running Locally

### 1. Prerequisites
- Node.js (v18 or newer recommended)
- A Google Gemini API Key ([Get one free on Google AI Studio](https://aistudio.google.com/))

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your GEMINI_API_KEY
npm run dev

<!--this is a comment-->