import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { Student1Component } from './layout/student1/student1.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'Contact',
    component:ContactUsComponent
  },
  {
    path:'about',
    component:AboutUsComponent
  },
  {
    path:'student1/:studentname',
    component:Student1Component
  },
  {
    
    path:'products',loadChildren: ()=>import('./products/products.module').then(m=>m.ProductsModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
