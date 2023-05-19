import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoggerService {
	constructor() {}

	logAction(action: string, name: string) {
		console.log(`${action} : ${name}`);
	}
}
