import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenedSocialsComponent } from './opened-socials/opened-socials.component';
import { SocialModule } from '../social/social.module';

@NgModule({
	declarations: [AppComponent, OpenedSocialsComponent],
	imports: [SocialModule, BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
