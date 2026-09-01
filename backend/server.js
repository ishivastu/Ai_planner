import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/plan-trip', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Please provide a prompt' });
  }

  try {
    // We explicitly tell the AI to use Rupees (₹) in the prompt template
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a travel planner. Plan a trip for: "${prompt}". 
      Use Indian Rupees (₹) for all estimated costs.
      Return ONLY valid JSON. Follow this exact structure:
      {
        "title": "Trip to X",
        "budget": "₹15,000",
        "days": [
          {
            "dayNumber": 1,
            "theme": "Arrival",
            "activities": [
              {
                "id": "unique-string-1",
                "time": "10:00 AM",
                "title": "Visit Museum",
                "cost": "₹500"
              }
            ]
          }
        ]
      }`,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const data = JSON.parse(response.text);

    // Manual error handling
    if (!data.days || !Array.isArray(data.days)) {
      return res.status(502).json({ 
        error: 'AI generated a bad format. Please try again.' 
      });
    }

    res.json({ success: true, data: data });

  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ error: 'Failed to communicate with AI or parse JSON.' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000')
});