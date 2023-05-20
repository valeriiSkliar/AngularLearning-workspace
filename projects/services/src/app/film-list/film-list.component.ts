import { Component } from '@angular/core';
import { FilmCollectionService } from '../film-collection.service';

@Component({
	selector: 'app-film-list',
	templateUrl: './film-list.component.html',
	styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent {
	hidePosters = false;

	constructor(public filmCollectionService: FilmCollectionService) {}
}
