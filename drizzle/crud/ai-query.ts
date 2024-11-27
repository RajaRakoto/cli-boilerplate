/* libs */
import { eq } from "drizzle-orm";

/* orm */
import { db } from "../db";
import { tGemini, tGeminiUsage } from "../migrations/schema";

/* types */
import type {
  T_tGeminiSchema,
  T_tGeminiUsageSchema,
  T_AllGeminiTables,
  T_AllGeminiSchemas,
} from "../types";

// ===============================

export async function qCreate(
  table: T_AllGeminiTables,
  values: T_AllGeminiSchemas
): Promise<void> {
  return await db.insert(table).values(values);
}

export async function qRead_tGemini(id: number): Promise<T_tGeminiSchema> {
  return (await db.select().from(tGemini).where(eq(tGemini.geminiId, id)))[0];
}

export async function qRead_tGeminiUsage(
  id: number
): Promise<T_tGeminiUsageSchema> {
  return (
    await db
      .select()
      .from(tGeminiUsage)
      .where(eq(tGeminiUsage.geminiUsageId, id))
  )[0];
}

export async function qUpdate_tGemini(
  id: number,
  values: T_tGeminiSchema
): Promise<void> {
  await db.update(tGemini).set(values).where(eq(tGemini.geminiId, id));
}

export async function qUpdate_tGeminiUsage(
  id: number,
  values: T_tGeminiUsageSchema
): Promise<void> {
  await db
    .update(tGeminiUsage)
    .set(values)
    .where(eq(tGeminiUsage.geminiUsageId, id));
}

export async function qDelete_tGemini(id: number): Promise<void> {
  await db.delete(tGemini).where(eq(tGemini.geminiId, id));
}

export async function qDelete_tGeminiUsage(id: number): Promise<void> {
  await db.delete(tGeminiUsage).where(eq(tGeminiUsage.geminiUsageId, id));
}
