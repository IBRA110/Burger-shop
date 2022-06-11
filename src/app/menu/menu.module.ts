import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { DobbleBurgersComponent } from './dobble-burgers/dobble-burgers.component';
import { CheeseBurgersComponent } from './cheese-burgers/cheese-burgers.component';
import { AllBurgersComponent } from './all-burgers/all-burgers.component';
import { BurgersComponent } from './burgers/burgers.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { QuillModule } from 'ngx-quill';
import { ProductPageComponent } from './product-page/product-page.component'; 
import { SortingPipe } from '../shared/sorting.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
	imports:[
		CommonModule,
		QuillModule,
		RouterModule.forChild([{
			path: '', component: MenuComponent, children: [
				{path: '', redirectTo: '/menu/all', pathMatch: 'full'},
				{path: 'all', component: AllBurgersComponent},
				{path: 'burgers', component: BurgersComponent},
				{path: 'dobble-burgers', component: DobbleBurgersComponent},
				{path: 'cheese-burgers', component: CheeseBurgersComponent},
				{path: 'product/:id', component: ProductPageComponent}
			]
		}]), 
		MatProgressBarModule,
	],
	exports: [RouterModule],
	declarations:[
		AllBurgersComponent,
		BurgersComponent,
		DobbleBurgersComponent,
		CheeseBurgersComponent,
    ProductComponent,
		ProductPageComponent,
		SortingPipe
	]
})

export class MenuModule{}
