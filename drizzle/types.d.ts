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
}
