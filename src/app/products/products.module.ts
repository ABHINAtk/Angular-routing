import { productRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        ProductsComponent,
        ProductDetailsComponent
    ],
    imports:[
        CommonModule,
        productRoutingModule
    ]
})

export class ProductsModule{ }