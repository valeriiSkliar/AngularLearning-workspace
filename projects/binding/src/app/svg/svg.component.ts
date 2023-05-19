import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-svg',
	templateUrl: './svg.component.html',
	styleUrls: ['./svg.component.css'],
})
export class SvgComponent {
	fontSize: number = 16;
	textColor: string = '#ff545f';
	fillColor: string = '#ffffff';
	circleX: number = 100;
	circleY: number = 100;
	circleRadius: number = 5;
	opacityCount: number = 0;
	changeColorCount: number = 0;
	isTransparent: boolean = false;
	svgBackgroundColor: string = '#dfd554';

	@HostListener('wheel', ['$event'])
	onWheel(event: WheelEvent): void {
		if (event.deltaY < 0) {
			this.circleRadius += 5;
		} else {
			this.circleRadius -= 5;
		}
	}

	onColorChange(event: any): void {
		this.fillColor = event.target.value;
		this.changeColorCount += 1;
	}

	onDoubleClick() {
		this.isTransparent = !this.isTransparent;
		this.opacityCount += 1;
	}

	onSvgRightClick(event: MouseEvent): void {
		event.preventDefault(); // предотвратить открытие контекстного меню
		this.fillColor = this.getRandomColor();
		this.changeColorCount += 1;
	}

	getRandomColor(): string {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
}
