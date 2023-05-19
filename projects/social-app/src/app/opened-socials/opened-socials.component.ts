import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TwitterComponent } from '../../social/closed-socials/twitter/twitter.component';
import { LinkedInComponent } from '../../social/closed-socials/linked-in/linked-in.component';

@Component({
	selector: 'app-opened-socials',
	templateUrl: './opened-socials.component.html',
	styleUrls: ['./opened-socials.component.css'],
})
export class OpenedSocialsComponent {
	@ViewChild(TwitterComponent) twitterComponent: TwitterComponent | null = null;
	@ViewChild(LinkedInComponent) linkedInComponent: LinkedInComponent | null = null;
	totalClicks: number = 0;

	onChildClick() {
		this.totalClicks += 1;
	}
}
