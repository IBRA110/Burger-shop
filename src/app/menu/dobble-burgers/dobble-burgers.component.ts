import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dobble-burgers',
  templateUrl: './dobble-burgers.component.html',
  styleUrls: ['./dobble-burgers.component.scss']
})
export class DobbleBurgersComponent implements OnInit {

	products$: Observable<any[]>

	constructor(
		private productServ: ProductService
	) { }

  ngOnInit() {
		this.products$ = this.productServ.getAll()
  }
}
