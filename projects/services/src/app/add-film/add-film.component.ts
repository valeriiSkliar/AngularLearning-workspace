import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmCollectionService } from '../film-collection.service';
import { LoggerService } from '../logger.service';

@Component({
	selector: 'app-add-film',
	templateUrl: './add-film.component.html',
	styleUrls: ['./add-film.component.css'],
})
export class AddFilmComponent {
	constructor(private filmCollectionService: FilmCollectionService, private loggerService: LoggerService) {}
	addFilm(addForm: NgForm) {
		if (addForm.invalid) {
			return;
		}
		const name = addForm.form.value.name;
		const posterLink = addForm.form.value.posterLink;
		this.filmCollectionService.addFilmToCollection({ name: name, posterLink: posterLink });
		this.loggerService.logAction('movie added', name);
	}
}
