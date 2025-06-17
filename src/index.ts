/* libs */
import inquirer from "inquirer";
import { Command } from "commander";

/* menu */
import { mainMenu_prompt } from "@/prompt";

/* core */
import { app } from "@/core/app";

/* utils */
import { bannerRendererAsync } from "@/utils/ascii";
import { exitCLI } from "@/utils/extras";

/* files */
import pkg from "../package.json";

// ==============================

/**
 * @description Entry point of the CLI
 */
export async function myCLI(): Promise<void> {
	// show banner
	const banner = await bannerRendererAsync("My-CLI", `${pkg.description}`);
	console.log(`${banner}\n`);

	// start menu
	const choice = await inquirer.prompt(mainMenu_prompt);

	// switch menu
	switch (choice.mainMenu) {
		case "operation-1":
			app("operation 1");
			break;
		case "operation-2":
			app("operation 2");
			break;
		case "operation-3":
			app("operation 3");
			break;
		case "exit":
			exitCLI();
			break;
		default:
			myCLI();
			break;
	}
}

function args(): void {
	const packageVersion = pkg.version;
	const program = new Command();
	program.option("-v, --version", "show CLI version");
	program.parse(process.argv);
	if (program.opts().version) {
		console.log(`version ${packageVersion}`);
	} else {
		myCLI();
	}
}

args();
