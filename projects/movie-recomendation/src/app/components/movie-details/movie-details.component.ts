import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
	respons: unknown;

	movie: unknown;

	initWidth = 200;

	clicks = 0;

	state = false;

	averageRating: number | null = null;

	numVotes: number | null = null;

	constructor(private route: ActivatedRoute, private movieService: MovieService) {}

	ngOnInit(): void {
		this.loadMovieDetails();
	}

	async loadMovieDetails() {
		const id = this.route.snapshot.paramMap.get('id');
		this.respons = await this.movieService.getMovieDetails(id);
		// @ts-ignore
		this.movie = this.respons.results;
		// this.respons = await this.movieService.getMovieRatings(id);
		// this.averageRating = this.respons.results.averageRating;
		// this.numVotes = this.respons.results.averageRating;
	}
}
