import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	@Input() product
	added: boolean = false

	constructor(
		private productServ: ProductService
	) { }

  ngOnInit(): void {
  }
	
	addProduct(product){
		this.productServ.addProduct(product)
		this.added = true 
		setTimeout(() => {
			this.added = false
		}, 2000);
	}
}
