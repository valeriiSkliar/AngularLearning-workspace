import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css'],
})
export class UserComponent {
	avatarWidthField = 100;

	avatarHeightField = 100;

	@Input() set avatarWidth(value: number) {
		if (this.isWithinPageSize(value, this.avatarHeightField)) {
			this.avatarWidthField = value < 0 ? 0 : value;
		}
	}

	get avatarWidth(): number {
		return this.avatarWidthField;
	}

	@Input() set avatarHeight(value: number) {
		if (this.isWithinPageSize(this.avatarWidthField, value)) {
			this.avatarHeightField = value < 0 ? 0 : value;
		}
	}

	get avatarHeight(): number {
		return this.avatarHeightField;
	}

	private isWithinPageSize(width: number, height: number): boolean {
		const maxDimension = Math.max(width, height);
		const pageWidth = window.innerWidth * 0.75;
		const pageHeight = window.innerHeight * 0.75;
		return maxDimension <= Math.min(pageWidth, pageHeight);
	}
}
