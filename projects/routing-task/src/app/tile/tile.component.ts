import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductsService } from '../products.service';
import { NavService } from '../nav.service';

@Component({
	selector: 'app-tile',
	templateUrl: './tile.component.html',
	styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {
	products: IProduct[] = [];

	constructor(private productsService: ProductsService, public navService: NavService) {}

	ngOnInit(): void {
		this.products = this.productsService.getProducts();
	}

	protected readonly NavService = NavService;

	navigateToDescription(product: IProduct) {
		this.navService.product = product;
		this.navService.navigateToDescription();
	}
}
