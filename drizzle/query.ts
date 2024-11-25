/* libs */
import { eq } from "drizzle-orm";

/* orm */
import { db } from "./db";
import { tGemini, tGeminiUsage } from "./schema";

/* types */
import type {
	I_Gemini,
	I_GeminiUsage,
	T_qInsertTable,
	T_qInsertValues,
	T_tGeminiSchema,
	T_tGeminiUsageSchema,
} from "./types";

// ===============================

export const rGemini: I_Gemini = (
	await db.select().from(tGemini).where(eq(tGemini.geminiId, 1))
)[0];

export const rGeminiUsage: I_GeminiUsage = (
	await db.select().from(tGeminiUsage).where(eq(tGeminiUsage.geminiUsageId, 1))
)[0];

export async function qInsert(table: T_qInsertTable, values: T_qInsertValues) {
	await db.insert(table).values(values);
}

export async function qUpdateGemini(values: T_tGeminiSchema) {
	await db.update(tGemini).set(values).where(eq(tGemini.geminiId, 1));
}

export async function qUpdateGeminiUsage(values: T_tGeminiUsageSchema) {
	await db
		.update(tGeminiUsage)
		.set(values)
		.where(eq(tGeminiUsage.geminiUsageId, 1));
}
