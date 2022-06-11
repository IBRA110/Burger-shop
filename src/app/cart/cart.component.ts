import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { OrderService } from '../shared/order.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	
	cartProducts = []
	totalPrice = 0
	form: FormGroup
	submitted: boolean = false
	added: boolean = false

	constructor(
		private productServ: ProductService,
		private orderServ: OrderService
	) { }

  ngOnInit(){
		this.cartProducts = this.productServ.cartProducts
		for (let i = 0; i < this.cartProducts.length; i++){
			this.totalPrice += +this.cartProducts[i].price
		}

		this.form = new FormGroup({
			name: new FormControl(null, Validators.required),
			phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
			addres: new FormControl(null, Validators.required),
			payment: new FormControl('Cash'),
		})
  }
	submit(){
		if (this.form.invalid){
			return
		}
		this.submitted = true

		const order = {
			name: this.form.value.name,
			phone: this.form.value.phone,
			addres: this.form.value.addres,
			payment: this.form.value.payment,
			orders: this.cartProducts,
			price: this.totalPrice,
			date: new Date()
		}
		this.orderServ.create(order).subscribe(res => {
			this.form.reset()
			this.submitted = false
			this.added = true 
			setTimeout(() => {
				this.added = false
				}, 5000);
		})
	}

	delete(product){
		this.totalPrice -= +product.price
		this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
	}
}
