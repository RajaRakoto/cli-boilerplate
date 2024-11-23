/* libs */
import { GoogleGenerativeAI } from "@google/generative-ai";

/* orm */
import { rGemini } from "../../drizzle/query";

// ==============================

const genAI = new GoogleGenerativeAI(rGemini.apiKey || "");

export const geminiModel = genAI.getGenerativeModel({
  model: rGemini.model,
});
