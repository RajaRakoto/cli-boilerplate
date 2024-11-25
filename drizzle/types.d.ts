import type { tGemini, tGeminiUsage } from "./schema";

// ===============================

export type T_tGemini = typeof tGemini;
export type T_tGeminiUsage = typeof tGeminiUsage;
export type T_tGeminiSchema = typeof tGemini.$inferInsert;
export type T_tGeminiUsageSchema = typeof tGeminiUsage.$inferInsert;
export type T_qInsertTable = T_tGemini | T_tGeminiUsage;
export type T_qInsertValues = T_tGeminiSchema | T_tGeminiUsageSchema;

export interface I_Gemini {
  geminiId: number;
  apiKey: string | null;
  model: string;
  prompt: string;
}

export interface I_GeminiUsage {
  geminiUsageId: number;
  rpmLimit: number;
  rpdLimit: number;
  tpmLimit: number;
  rpmStart: string | null;
  rpdStart: string | null;
  tpmStart: string | null;
  rpmEnd: string | null;
  rpdEnd: string | null;
  tpmEnd: string | null;
  rpmCounter: number | null;
  rpdCounter: number | null;
  tpmCounter: number | null;
  intervalDelay: number | null;
  breakDelay: number | null;
}
