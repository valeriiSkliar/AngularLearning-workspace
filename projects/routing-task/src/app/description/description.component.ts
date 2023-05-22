import { Component } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
	selector: 'app-description',
	templateUrl: './description.component.html',
	styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
	product;

	constructor(private navService: NavService) {
		this.product = this.navService.product;
	}
}
