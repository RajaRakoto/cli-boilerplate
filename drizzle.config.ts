//DONT FORGET TO LOAD env variables
import { defineConfig } from "drizzle-kit";

//Configured for SQLite with Bun sqlite
export default defineConfig({
	dialect: "sqlite",
	schema: "./drizzle/schema.ts",
	out: "./drizzle/migrations",
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
	},
	strict: true,
	verbose: true,
});
