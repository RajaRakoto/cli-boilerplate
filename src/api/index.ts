/* libs */
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

/* orm */
import { rGemini } from "../../drizzle/query";

// ==============================

export const genAI = new GoogleGenerativeAI(rGemini.apiKey || "");
export const fileManager = new GoogleAIFileManager(rGemini.apiKey || "");

export const geminiModel = genAI.getGenerativeModel({
	model: rGemini.model,
});
