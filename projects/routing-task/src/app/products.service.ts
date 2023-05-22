// products.service.ts
import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private products: IProduct[] = [
		{
			id: 1,
			name: 'Книга "1984"',
			price: 650,
			description: 'Роман-антиутопия Джорджа Оруэлла, написанный в 1948 году.',
			imageUrl: 'https://anylang.net/sites/default/files/covers/1984.jpg',
		},
		{
			id: 2,
			name: 'Книга "Улисс"',
			price: 800,
			description: 'Роман Джеймса Джойса, считающийся одним из величайших произведений XX века.',
			imageUrl: 'https://cv7.litres.ru/pub/c/cover_max1500/136177.jpg',
		},
		{
			id: 6,
			name: 'Книга "Мастер и Маргарита"',
			price: 750,
			description: 'Роман Михаила Булгакова, одно из величайших произведений XX века.',
			imageUrl: 'https://img01litfund.ru/images/lots/92/92-390-2228-16-VC061917.jpg',
		},
		{
			id: 4,
			name: 'Книга "Граф Монте-Кристо"',
			price: 700,
			description: 'Роман Александра Дюма о любви, предательстве и мести главного героя.',
			imageUrl: 'https://s1.livelib.ru/boocover/1002217446/o/518c/Aleksandr_Dyuma__Graf_MonteKristo.jpeg',
		},
		{
			id: 5,
			name: 'Книга "Гарри Поттер и философский камень"',
			price: 550,
			description: 'Первая книга серии Дж. К. Роулинг о юном волшебнике Гарри Поттере.',
			imageUrl: 'https://staticlb.rmr.rocks/uploads/pics/02/08/358.jpg',
		},
	];

	getProducts(): IProduct[] {
		return this.products;
	}
}
