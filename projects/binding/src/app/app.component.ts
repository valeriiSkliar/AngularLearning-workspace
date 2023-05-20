import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'title';

	onOff = false;

	private red = 0;

	private green = 0;

	private blue = 0;

	textColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;

	changeColor() {
		this.onOff = !this.onOff;
		this.textColor = `rgb(${Math.round(Math.random() * 250)}, ${Math.round(Math.random() * 250)}, ${Math.round(
			Math.random() * 250,
		)})`;
	}
}
