/* libs */
import chalk from "chalk";

/* drizzle */
import { rGemini, rGeminiUsage } from "../../../drizzle/query";

/* constants */
import { TEST_PDF_FILES } from "@/constants";

/* types */
import type { I_Display } from "@/@types";

// ==============================

export function aiStatus(display: I_Display) {
  if (display.model) console.log(chalk.cyan("Model:"), rGemini.model);
  if (display.prompt) console.log(chalk.cyan("Prompt:"), rGemini.prompt);
  if (display.rpmCounter)
    console.log(
      chalk.cyan("RPM counter:"),
      `${rGeminiUsage.rpmCounter}/${rGeminiUsage.rpmLimit}`
    );
  if (display.rpdCounter)
    console.log(
      chalk.cyan("RPD counter:"),
      `${rGeminiUsage.rpdCounter}/${rGeminiUsage.rpdLimit}`
    );
  if (display.tpmCounter)
    console.log(
      chalk.cyan("TPM counter:"),
      `${rGeminiUsage.tpmCounter}/${rGeminiUsage.tpmLimit}`
    );
  if (display.intervalDelay)
    console.log(
      chalk.cyan("Interval delay:"),
      `${(rGeminiUsage.intervalDelay || 0) / 1000} s`
    );
  if (display.breakDelay)
    console.log(
      chalk.cyan("Break delay:"),
      `${(rGeminiUsage.breakDelay || 0) / 1000} s`
    );
  if (display.totalPDF)
    console.log(chalk.cyan("Total PDF:"), TEST_PDF_FILES.length);
}
