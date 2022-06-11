import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cheese-burgers',
  templateUrl: './cheese-burgers.component.html',
  styleUrls: ['./cheese-burgers.component.scss']
})
export class CheeseBurgersComponent implements OnInit {

	products$: Observable<any[]>

	constructor(
		private productServ: ProductService
	) { }

  ngOnInit() {
		this.products$ = this.productServ.getAll()
  }
}
