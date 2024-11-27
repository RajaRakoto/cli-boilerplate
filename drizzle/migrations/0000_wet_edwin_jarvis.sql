CREATE TABLE `t_gemini` (
	`gemini_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`api_key` text(255),
	`model` text(255) NOT NULL,
	`prompt` text(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `t_gemini_usage` (
	`gemini_usage_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`rpm_limit` integer NOT NULL,
	`rpd_limit` integer NOT NULL,
	`tpm_limit` integer NOT NULL,
	`rpm_start` numeric,
	`rpd_start` numeric,
	`tpm_start` numeric,
	`rpm_end` numeric,
	`rpd_end` numeric,
	`tpm_end` numeric,
	`rpm_counter` integer,
	`rpd_counter` integer,
	`tpm_counter` integer,
	`interval_delay` integer,
	`break_delay` integer
);
