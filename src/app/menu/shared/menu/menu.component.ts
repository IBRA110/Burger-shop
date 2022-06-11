import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { fader } from '../../../animations/anim';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
	animations: [fader]

})
export class MenuComponent implements OnInit {

	prepareRoute(outlet: RouterOutlet){
		return outlet.isActivated ? outlet.activatedRoute : '';
	}

  constructor() { }

  ngOnInit(): void {
  }
	onActivate(event) {
		let scrollToTop = window.setInterval(() => {
			let pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos - 50);
			} else {
			window.clearInterval(scrollToTop);
				}
    }, 5);
	}
}
