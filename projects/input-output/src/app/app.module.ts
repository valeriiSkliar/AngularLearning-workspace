import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AvatarComponent } from './user/avatar/avatar.component';
import { AvatarSettingsComponent } from './user/avatar-settings/avatar-settings.component';

@NgModule({
	declarations: [AppComponent, UserComponent, AvatarComponent, AvatarSettingsComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
