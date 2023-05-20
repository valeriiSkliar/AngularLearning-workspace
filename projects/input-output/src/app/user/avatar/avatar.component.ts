import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
	@Input() width = 100;

	@Input() height = 100;

	src = 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=avif&w=256';
}
