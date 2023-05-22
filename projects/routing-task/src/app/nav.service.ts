import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from './product';

@Injectable({
	providedIn: 'root',
})
export class NavService {
	id = 0;

	name = '';

	price = 0;

	description = '';

	imageUrl = '';

	product?: IProduct;

	constructor(private router: Router) {}

	navigateToDescription(): void {
		this.router.navigate(['description']);
	}
}
