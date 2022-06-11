import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { fader } from '../../animations/anim';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
	animations: [fader]
})
export class MainComponent implements OnInit {
	
	logo: string = 'src/assets/images/logo.png';
	toggle: boolean = true
	public screenWidth: number
	public screenWidthOld: number
	
	prepareRoute(outlet: RouterOutlet){
		return outlet.isActivated ? outlet.activatedRoute : '';
	}

	constructor() { }

  ngOnInit(){
		
		this.screenWidthOld = window.innerWidth;
		if (this.screenWidthOld < 768){
			this.toggle = false
		}
		setInterval(() => {
			this.screenWidth = window.innerWidth;
			if (this.screenWidthOld === this.screenWidth){

			}else if (this.screenWidth < 768){
				this.screenWidthOld = this.screenWidth
				this.toggle = false
			}else{
				this.screenWidthOld = this.screenWidth
				this.toggle = true
			}
		}, 100)	
  }

	change(){
		if (this.screenWidth < 767){
			this.toggle = !this.toggle
		}
	}
}
