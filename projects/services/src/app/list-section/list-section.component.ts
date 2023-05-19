import { Component } from '@angular/core';
import { FilmCollectionService } from '../film-collection.service';

@Component({
	selector: 'app-list-section',
	templateUrl: './list-section.component.html',
	styleUrls: ['./list-section.component.css'],
	providers: [FilmCollectionService],
})
export class ListSectionComponent {
	constructor(private filmCollectionService: FilmCollectionService) {}
}
