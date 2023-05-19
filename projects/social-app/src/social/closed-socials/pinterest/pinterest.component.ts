import { Component } from '@angular/core';

@Component({
	selector: 'app-pinterest',
	templateUrl: './pinterest.component.html',
	styleUrls: ['./pinterest.component.css'],
})
export class PinterestComponent {
	src: string = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png';
	count: number = 0;
	imageSize: number = 50;
	colorise: boolean = true;
	currentSize: number = this.imageSize;

	clickCount(imageElement: HTMLImageElement) {
		this.count += 1;
		this.colorise = this.count % 2 === 0;
		this.imageSize += 1;
		this.currentSize = imageElement.width;
	}
}
