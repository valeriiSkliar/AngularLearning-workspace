import { Injectable } from '@angular/core';
import { IFilm } from './film';
import { LoggerService } from './logger.service';

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

	constructor(private loggerService: LoggerService) {}

	getAllFilms(): IFilm[] {
		return this.collection;
	}

	addFilmToCollection(item: IFilm) {
		this.collection.push(item);
		this.loggerService.logAction('movie added', item.name);
	}

	removeFilmFromCollection(name: string) {
		this.collection = this.collection.filter((film) => film.name !== name);
		this.loggerService.logAction('movie removed', name);
	}
}
