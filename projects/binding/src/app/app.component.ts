import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title: string = 'title';
	onOff: boolean = false;
	private red: number = 0;
	private green: number = 0;
	private blue: number = 0;
	textColor: string = `rgb(${this.red}, ${this.green}, ${this.blue})`;

	changeColor() {
		this.onOff = !this.onOff;
		this.textColor = `rgb(${Math.round(Math.random() * 250)}, ${Math.round(Math.random() * 250)}, ${Math.round(
			Math.random() * 250,
		)})`;
	}
}
