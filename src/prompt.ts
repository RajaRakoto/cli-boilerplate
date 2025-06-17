/* libs */
import inquirer from "inquirer";
import chalk from "chalk";
import * as emoji from "node-emoji";

// ==============================

export const mainMenu_prompt = [
	{
		type: "list",
		name: "mainMenu",
		message: chalk.bgBlue("Choose an operation"),
		loop: false,
		pageSize: 15,
		choices: [
			new inquirer.Separator("============== operation list ============"),
			{
				name: `${emoji.get("pushpin")} operation 1`,
				value: "operation-1",
			},
			{
				name: `${emoji.get("pushpin")} operation 2`,
				value: "operation-2",
			},
			{
				name: `${emoji.get("pushpin")} operation 3`,
				value: "operation-3",
			},
			new inquirer.Separator("=========================================="),
			{
				name: chalk.red(`${emoji.get("door")} exit`),
				value: "exit",
			},
		],
	},
];
