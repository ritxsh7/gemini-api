import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateResponse = async () => {
  const prompt = "Give a roadmap to learn machine learning in points";
  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    console.log(response.text());
  } catch (error) {
    console.log(error.message);
  }
};
