import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-svg',
	templateUrl: './svg.component.html',
	styleUrls: ['./svg.component.css'],
})
export class SvgComponent {
	fontSize = 16;

	textColor = '#ff545f';

	fillColor = '#ffffff';

	circleX = 100;

	circleY = 100;

	circleRadius = 5;

	opacityCount = 0;

	changeColorCount = 0;

	isTransparent = false;

	svgBackgroundColor = '#dfd554';

	private color = '#';

	@HostListener('wheel', ['$event'])
	onWheel(event: WheelEvent): void {
		if (event.deltaY < 0) {
			this.circleRadius += 5;
		} else {
			this.circleRadius -= 5;
		}
	}

	onColorChange(event: Event): void {
		this.fillColor = (event.target as HTMLInputElement).value;
		this.changeColorCount += 1;
	}

	onDoubleClick() {
		this.isTransparent = !this.isTransparent;
		this.opacityCount += 1;
	}

	onSvgRightClick(event: MouseEvent): void {
		event.preventDefault();
		this.fillColor = this.getRandomColor();
		this.changeColorCount += 1;
	}

	getRandomColor(): string {
		const letters = '0123456789ABCDEF';
		this.color = '#';
		for (let i = 0; i < 6; i += 1) {
			this.color += letters[Math.floor(Math.random() * 16)];
		}
		return this.color;
	}
}
