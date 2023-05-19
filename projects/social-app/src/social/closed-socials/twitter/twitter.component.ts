import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-twitter',
	templateUrl: './twitter.component.html',
	styleUrls: ['./twitter.component.css'],
})
export class TwitterComponent {
	@Output() clickEvent = new EventEmitter();
	src: string = 'https://static.wikia.nocookie.net/fairy-tail-magic-brawl-wiki/images/5/5f/TI1.png';
	count: number = 0;
	imageSize: number = 50;
	colorise: boolean = true;
	currentSize: number = this.imageSize;

	clickCount(imageElement: HTMLImageElement) {
		this.count += 1;
		this.colorise = this.count % 2 === 0;
		this.imageSize += 1;
		this.clickEvent.emit();
		this.currentSize = imageElement.width;
	}
}
