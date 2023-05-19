import { Injectable } from '@angular/core';
import { Film } from './film';

@Injectable({
	providedIn: 'root',
})
export class FilmCollectionService {
	collection: Film[] = [
		{
			name: 'Mandalorian',
			posterLink: 'https://static.posters.cz/image/1300/postere/star-wars-the-mandalorian-nightfall-i103406.jpg',
		},
	];

	constructor() {}

	getAllFilms(): Film[] {
		return this.collection;
	}

	addFilmToCollection(item: Film) {
		this.collection.push(item);
	}

	removeFilmFromCollection(name: string) {
		this.collection = this.collection.filter((film) => film.name !== name);
	}
}
