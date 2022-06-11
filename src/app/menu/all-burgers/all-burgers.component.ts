import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-burgers',
  templateUrl: './all-burgers.component.html',
  styleUrls: ['./all-burgers.component.scss']
})

export class AllBurgersComponent implements OnInit {

	products$: Observable<any[]>

	constructor(
		public productServ: ProductService
	) { }

  ngOnInit() {
		this.products$ = this.productServ.getAll()
  }
}
