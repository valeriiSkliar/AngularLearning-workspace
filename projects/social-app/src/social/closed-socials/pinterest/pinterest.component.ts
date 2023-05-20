import { Component } from '@angular/core';

@Component({
	selector: 'app-pinterest',
	templateUrl: './pinterest.component.html',
	styleUrls: ['./pinterest.component.css'],
})
export class PinterestComponent {
	src = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png';

	count = 0;

	imageSize = 50;

	colorise = true;

	currentSize: number = this.imageSize;

	clickCount(imageElement: HTMLImageElement) {
		this.count += 1;
		this.colorise = this.count % 2 === 0;
		this.imageSize += 1;
		this.currentSize = imageElement.width;
	}
}
