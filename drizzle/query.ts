/* libs */
import { eq } from "drizzle-orm";

/* orm */
import { db } from "./db";
import { tGemini, tGeminiUsage } from "./schema";

/* types */
import type { I_Gemini, I_GeminiUsage } from "./types";

// ===============================

export const rGemini: I_Gemini = (
  await db.select().from(tGemini).where(eq(tGemini.geminiId, 1))
)[0];

export const rGeminiUsage: I_GeminiUsage = (
  await db.select().from(tGeminiUsage).where(eq(tGeminiUsage.geminiUsageId, 1))
)[0];
