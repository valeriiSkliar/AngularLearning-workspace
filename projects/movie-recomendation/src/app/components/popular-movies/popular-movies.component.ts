import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
	selector: 'app-popular-movies',
	templateUrl: './popular-movies.component.html',
	styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent {
	popularMovies: unknown[] = [];

	response: unknown;

	currentPage = 1;

	listId: string | null = '';

	constructor(private route: ActivatedRoute, private movieService: MovieService) {}

	scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	async loadPopularMovies() {
		const id: string | null = this.route.snapshot.paramMap.get('id');
		this.listId = id;
		this.response = await this.movieService.getPopularMovies(this.currentPage, id);
		this.initPopularFilms(this.response);
	}

	async nextPage() {
		this.currentPage += 1;
		this.response = await this.movieService.getPopularMovies(this.currentPage, this.listId);
		this.initPopularFilms(this.response);
		this.scrollToTop();
	}

	initPopularFilms(response: unknown) {
		// @ts-ignore
		const { results } = response;
		this.popularMovies = results;
	}
}
