import { restartAsync } from "@/core/restart";

export function app(operation: string): void {
	console.log(`${operation} selected !`);
	restartAsync();
}
