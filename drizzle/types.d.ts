import type { tGemini, tGeminiUsage } from "./schema";

// ===============================

export type T_tGemini = typeof tGemini;
export type T_tGeminiUsage = typeof tGeminiUsage;
export type T_tGeminiSchema = typeof tGemini.$inferInsert;
export type T_tGeminiUsageSchema = typeof tGeminiUsage.$inferInsert;
export type T_AllGeminiTables = T_tGemini | T_tGeminiUsage;
export type T_AllGeminiSchemas = T_tGeminiSchema | T_tGeminiUsageSchema;

export interface I_tGemini {
  geminiId: number;
  apiKey: string | null;
  model: string;
  prompt: string;
}

export interface I_tGeminiUsage {
  geminiUsageId: number;
  rpmLimit: number;
  rpdLimit: number;
  tpmLimit: number;
  rpmStart: number | null;
  rpdStart: number | null;
  tpmStart: number | null;
  rpmEnd: number | null;
  rpdEnd: number | null;
  tpmEnd: number | null;
  rpmCounter: number | null;
  rpdCounter: number | null;
  tpmCounter: number | null;
  intervalDelay: number | null;
  breakDelay: number | null;
}
