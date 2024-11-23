/* libs */
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

/* constants */
import { DATABASE_PATH } from "@/constants";

// ==============================

const sqlite = new Database(DATABASE_PATH);
export const db = drizzle(sqlite);
