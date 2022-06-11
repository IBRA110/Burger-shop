import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './shared/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../shared/auth.guard';
import { QuillModule } from 'ngx-quill';
import { SearchPipe } from '../shared/search.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
	imports:[
		CommonModule,
		FormsModule,
		QuillModule.forRoot(),
		ReactiveFormsModule,
		RouterModule.forChild([
			{path: '', component: AdminComponent, children: [
				{path: '', redirectTo: '/admin/login', pathMatch: 'full'},
				{path: 'login', component: LoginComponent},
				{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
				{path: 'add', component: AddComponent, canActivate: [AuthGuard]},
				{path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
				{path: 'product/:id/edit', component: EditComponent, canActivate: [AuthGuard]},
			]}
		]),
		MatProgressBarModule
	],
	exports:[RouterModule],
	declarations: [
   AdminComponent,
   LoginComponent,
   AddComponent,
   DashboardComponent,
   EditComponent,
   OrdersComponent,
	 SearchPipe
	]
})


export class AdminModule{
	
}
