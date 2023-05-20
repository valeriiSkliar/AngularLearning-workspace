import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoggerService {
	action?: string;

	name?: string;

	logAction(action: string, name: string) {
		this.action = action;
		this.name = name;
		console.log(`${this.action} : ${this.name}`);
	}
}
