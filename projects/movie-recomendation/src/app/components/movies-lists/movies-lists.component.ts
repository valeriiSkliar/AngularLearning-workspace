import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
	selector: 'app-movies-lists',
	templateUrl: './movies-lists.component.html',
	styleUrls: ['./movies-lists.component.css'],
})
export class MoviesListsComponent implements OnInit {
	lists: unknown[] = [];

	constructor(private movieService: MovieService) {}

	ngOnInit() {
		this.loadLists();
	}

	async loadLists() {
		const response = await this.movieService.getLists();
		this.lists = response.results;
	}
}
