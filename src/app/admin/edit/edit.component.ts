import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Product } from '../../shared/interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

	form: FormGroup
	product: Product
	submitted: boolean = false
	edited: boolean = false

	constructor(
		private route: ActivatedRoute,
		private productServ: ProductService,
		private router: Router
	) { }

  ngOnInit(){
		this.route.params.pipe(switchMap(params => {
			return this.productServ.getById(params['id'])
		})).subscribe(product => {
			this.product = product
			this.form = new FormGroup({
				type: new FormControl(this.product.type, Validators.required),
				title: new FormControl(this.product.title, Validators.required),
				photo: new FormControl(this.product.photo, Validators.required),
				info: new FormControl(this.product.info, Validators.required),
				price: new FormControl(this.product.price, Validators.required),
			})
		})
  }
	submit(){
		if (this.form.invalid){
			return
		}

		this.submitted = true


		this.productServ.update({
			...this.product,
			type: this.form.value.type,
			title: this.form.value.title,
			photo: this.form.value.photo,
			info: this.form.value.info,
			price: this.form.value.price,
			date: new Date()
		}).subscribe(res => {
			this.submitted = false
			this.edited = true 
			setTimeout(() => {
				this.edited = false
				}, 5000);
			this.router.navigate(['/admin', 'dashboard'])
		})
	}

}
