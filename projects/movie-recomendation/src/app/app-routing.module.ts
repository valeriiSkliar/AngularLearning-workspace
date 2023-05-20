import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { MoviesListsComponent } from './components/movies-lists/movies-lists.component';

const routes: Routes = [
	{
		path: '',
		component: MoviesListsComponent,
	},
	{
		path: 'lists/:id',
		component: PopularMoviesComponent,
	},
	{
		path: 'movie/:id',
		loadChildren: () => import('./components/movie-details/movie-details.module').then((m) => m.MovieDetailsModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
