import { Component } from '@angular/core';
import { fader } from './animations/anim';
import { RouterModule, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	animations: [fader]
})
export class AppComponent {
  title = 'burger-shop';
	
	ngOnInit(){
		AOS.init()
	}

	onActivate(event) {
				let scrollToTop = window.setInterval(() => {
			let pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos - 10);
			} else {
			window.clearInterval(scrollToTop);
				}
    }, 16);
	}
}

