
import { GoogleGenAI, Type } from "@google/genai";
import { AIInsight } from "../types";

export const getAIInsight = async (): Promise<AIInsight> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate a short, inspiring tech-related quote and a one-sentence piece of productivity advice for a software developer. Return it in JSON format.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            quote: { type: Type.STRING },
            advice: { type: Type.STRING }
          },
          required: ["quote", "advice"]
        }
      }
    });

    const data = JSON.parse(response.text);
    return data as AIInsight;
  } catch (error) {
    console.error("Gemini API error:", error);
    return {
      quote: "The best way to predict the future is to invent it.",
      advice: "Focus on one meaningful task at a time to maximize your creative flow."
    };
  }
};
