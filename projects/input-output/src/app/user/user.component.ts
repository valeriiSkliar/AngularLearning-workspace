import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css'],
})
export class UserComponent {
	_avatarWidth = 100;
	_avatarHeight = 100;

	@Input() set avatarWidth(value: number) {
		if (this.isWithinPageSize(value, this._avatarHeight)) {
			this._avatarWidth = value < 0 ? 0 : value;
		}
	}

	get avatarWidth(): number {
		return this._avatarWidth;
	}

	@Input() set avatarHeight(value: number) {
		if (this.isWithinPageSize(this._avatarWidth, value)) {
			this._avatarHeight = value < 0 ? 0 : value;
		}
	}

	get avatarHeight(): number {
		return this._avatarHeight;
	}

	private isWithinPageSize(width: number, height: number): boolean {
		const maxDimension = Math.max(width, height);
		const pageWidth = window.innerWidth * 0.75;
		const pageHeight = window.innerHeight * 0.75;
		return maxDimension <= Math.min(pageWidth, pageHeight);
	}

	onWidthChange(value: number) {
		this.avatarWidth = value;
	}

	onHeightChange(value: number) {
		this.avatarHeight = value;
	}
}
