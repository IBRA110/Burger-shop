import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/main/main.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/shared/menu/menu.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
	path: '', component: MainComponent, children:[
		{path: '', redirectTo:'/', pathMatch: 'full'},
		{path: '', component: HomeComponent},
		{path: 'about', component: AboutComponent},
		{path: 'menu', loadChildren:() => import('./menu/menu.module').then(m => m.MenuModule)},
		{path: 'cart', component: CartComponent}
	]},
	{path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
