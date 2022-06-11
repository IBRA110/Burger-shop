import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

	constructor(
		public auth: AuthService,
		private router: Router
	) { }

  ngOnInit(): void {
  }
	logout($event){
		event.preventDefault()
		this.auth.logout()
		this.router.navigate(['/admin', 'login'])
	}

}
