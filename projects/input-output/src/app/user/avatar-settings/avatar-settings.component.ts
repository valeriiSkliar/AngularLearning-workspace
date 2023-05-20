import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-avatar-settings',
	templateUrl: './avatar-settings.component.html',
	styleUrls: ['./avatar-settings.component.css'],
})
export class AvatarSettingsComponent {
	@Input() valueWidth = 100;

	@Input() valueHeight = 100;

	@Output() valueWidthChange = new EventEmitter();

	@Output() valueHeightChange = new EventEmitter();

	heightChange({ target }: Event) {
		this.valueHeight = Number((target as HTMLInputElement).value);
		this.valueHeightChange.emit(this.valueHeight);
	}

	widthChange({ target }: Event) {
		this.valueWidth = Number((target as HTMLInputElement).value);
		this.valueWidthChange.emit(this.valueWidth);
	}
}
