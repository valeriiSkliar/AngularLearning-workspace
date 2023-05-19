import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmCollectionService } from '../film-collection.service';
import { LoggerService } from '../logger.service';

@Component({
	selector: 'app-remove-film',
	templateUrl: './remove-film.component.html',
	styleUrls: ['./remove-film.component.css'],
})
export class RemoveFilmComponent {
	constructor(private filmCollectionService: FilmCollectionService, private loggerService: LoggerService) {}
	removeFilm(removeForm: NgForm) {
		if (removeForm.invalid) {
			return;
		}
		const name = removeForm.form.value.name;
		this.filmCollectionService.removeFilmFromCollection(name);
		this.loggerService.logAction('movie removed', name);
	}
}
