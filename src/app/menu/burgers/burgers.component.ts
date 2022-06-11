import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})

export class BurgersComponent implements OnInit {

	products$: Observable<any[]>

	constructor(
		private productServ: ProductService
	) { }

  ngOnInit() {
		this.products$ = this.productServ.getAll()
  }
}
