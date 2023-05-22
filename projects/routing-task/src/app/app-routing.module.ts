import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { TileComponent } from './tile/tile.component';

const routes: Routes = [
	{
		path: '',
		component: TileComponent,
	},
	{
		path: 'description',
		component: DescriptionComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
