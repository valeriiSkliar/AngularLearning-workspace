import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FormsModule } from '@angular/forms';
import { RemoveFilmComponent } from './remove-film/remove-film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { ListSectionComponent } from './list-section/list-section.component';

@NgModule({
	declarations: [AppComponent, AddFilmComponent, RemoveFilmComponent, FilmListComponent, ListSectionComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
