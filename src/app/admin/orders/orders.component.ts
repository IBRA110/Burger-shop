import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

	orders = []
	pSub: Subscription
	rSub: Subscription


	constructor(
		private orderServ: OrderService
	) { }

  ngOnInit(){
		this.pSub = this.orderServ.getAll().subscribe(orders => {
			this.orders = orders
		})
  }

	ngOnDesroy(){
		if (this.pSub){
			this.pSub.unsubscribe()
		}

		if (this.rSub){
			this.rSub.unsubscribe()
		}
	}

	remove(id){
		this.rSub = this.orderServ.remove(id).subscribe(() => {
			this.orders = this.orders.filter(order => order.id != id)
		})
	}

}
