import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromotionalBannerComponent } from './components/promotional-banner/promotional-banner.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SessionComponent } from './components/session/session.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { FormNewProductComponent } from './components/form-new-product/form-new-product.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromotionalBannerComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    SessionComponent,
    NewProductComponent,
    FormNewProductComponent,
    AllProductsComponent,
    DetailsProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
