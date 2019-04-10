import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MycartComponent } from './mycart/mycart.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'MyCart', component: MycartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
