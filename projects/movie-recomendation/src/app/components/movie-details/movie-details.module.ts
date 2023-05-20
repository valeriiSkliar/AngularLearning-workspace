import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieService } from '../../services/movie.service';

@NgModule({
	declarations: [MovieDetailsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: MovieDetailsComponent,
			},
		]),
	],
	providers: [MovieService],
	exports: [MovieDetailsComponent],
})
export class MovieDetailsModule {}
