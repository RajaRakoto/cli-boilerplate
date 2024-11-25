/* libs */
import inquirer from "inquirer";
import chalk from "chalk";
import * as emoji from "node-emoji";

// ==============================

export const menu_prompt = [
  {
    type: "list",
    name: "menu",
    message: chalk.green("What do you want to do ..."),
    loop: false,
    pageSize: 15,
    choices: [
      new inquirer.Separator("=============== AI =============="),
      {
        name: `${emoji.get("pushpin")} Check AI status`,
        value: "aiStatus",
      },
      {
        name: `${emoji.get("pushpin")} Analyze PDF files with AI`,
        value: "aiPDF",
      },
      new inquirer.Separator("=========================================="),
      {
        name: chalk.red(`${emoji.get("door")} exit`),
        value: "exit",
      },
    ],
  },
];
