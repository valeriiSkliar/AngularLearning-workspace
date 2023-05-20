import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-linked-in',
	templateUrl: './linked-in.component.html',
	styleUrls: ['./linked-in.component.css'],
})
export class LinkedInComponent {
	@Output() clickEvent = new EventEmitter();

	src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png';

	count = 0;

	imageSize = 50;

	colorise = true;

	currentSize: number = this.imageSize;

	clickCount(imageElement: HTMLImageElement) {
		this.count += 1;
		this.colorise = this.count % 2 === 0;
		this.imageSize += 1;
		this.clickEvent.emit();
		this.currentSize = imageElement.width;
	}
}
