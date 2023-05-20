import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { MovieDetailsModule } from './components/movie-details/movie-details.module';
import { MoviesListsComponent } from './components/movies-lists/movies-lists.component';

@NgModule({
	declarations: [AppComponent, PopularMoviesComponent, MoviesListsComponent],
	imports: [HttpClientModule, BrowserModule, AppRoutingModule, MovieDetailsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
