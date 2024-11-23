/* libs */
import { sqliteTable, integer, numeric } from "drizzle-orm/sqlite-core";

// ==============================

export const tGemini = sqliteTable("t_gemini", {
  geminiId: integer("gemini_id").primaryKey({ autoIncrement: true }),
  apiKey: numeric("api_key"),
  model: numeric("model").notNull(),
  prompt: numeric("prompt").notNull(),
});

export const tGeminiUsage = sqliteTable("t_gemini_usage", {
  geminiUsageId: integer("gemini_usage_id").primaryKey({ autoIncrement: true }),
  rpmLimit: integer("rpm_limit").notNull(),
  rpdLimit: integer("rpd_limit").notNull(),
  tpmLimit: integer("tpm_limit").notNull(),
  rpmStart: numeric("rpm_start"),
  rpdStart: numeric("rpd_start"),
  tpmStart: numeric("tpm_start"),
  rpmEnd: numeric("rpm_end"),
  rpdEnd: numeric("rpd_end"),
  tpmEnd: numeric("tpm_end"),
  rpmCounter: integer("rpm_counter"),
  rpdCounter: integer("rpd_counter"),
  tpmCounter: integer("tpm_counter"),
});
