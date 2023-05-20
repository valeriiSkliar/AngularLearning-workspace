import { Injectable } from '@angular/core';
import { IFilm } from './film';

@Injectable({
	providedIn: 'root',
})
export class FilmCollectionService {
	collection: IFilm[] = [
		{
			name: 'Mandalorian',
			posterLink: 'https://static.posters.cz/image/1300/postere/star-wars-the-mandalorian-nightfall-i103406.jpg',
		},
	];

	getAllFilms(): IFilm[] {
		return this.collection;
	}

	addFilmToCollection(item: IFilm) {
		this.collection.push(item);
	}

	removeFilmFromCollection(name: string) {
		this.collection = this.collection.filter((film) => film.name !== name);
	}
}
