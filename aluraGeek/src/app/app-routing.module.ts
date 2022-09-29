import { DetailsProductComponent } from './pages/details-product/details-product.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "products",
    component: AllProductsComponent
  },
  {
    path: "details-products",
    component: DetailsProductComponent
  },
  {
    path: "new-product",
    component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
