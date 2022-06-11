import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/shared/menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { AuthInterceptor } from './shared/auth.interceptor';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    CartComponent,
  ],
  imports: [
		CommonModule,
    BrowserModule,
    AppRoutingModule,
		QuillModule.forRoot(),
		HttpClientModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatProgressBarModule,
	  ServiceWorkerModule.register('ngsw-worker.js', {
		  enabled: environment.production,
			registrationStrategy: 'registerWhenStable:30000'}),
		NgxMaskModule.forRoot(),
  ],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		multi: true,
		useClass: AuthInterceptor
	}],
  bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
