import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'products/new', component: NewProductComponent },
  { path: 'products/:id/edit', component: EditProductComponent },
  { path: 'products/:id', component: ViewProductComponent },
  { path: '', pathMatch: 'full', redirectTo: '/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
