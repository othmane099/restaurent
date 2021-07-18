import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemsComponent } from './component/product-items/product-items.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryItemsComponent } from './component/category-items/category-items.component';
import {RouterModule, Routes} from "@angular/router";
import { SearchProductComponent } from './component/search-product/search-product.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

// http://localhost:4200/
const routes: Routes = [
  // http://localhost:4200/product/id
  {path: 'product/:id', component:ProductDetailsComponent},
  // http://localhost:4200/category/id
  {path: 'category/:id', component:ProductItemsComponent},
  // http://localhost:4200/category
    {path: 'category', component:ProductItemsComponent},
  // http://localhost:4200/products/key
  {path: 'products/:key', component:ProductItemsComponent},
  // http://localhost:4200/products
  {path: 'products', component:ProductItemsComponent},
  // http://localhost:4200/
  {path: '', redirectTo: '/products',pathMatch: 'full'},
  // if user enter any thing without all routes
  {path: '**', redirectTo: '/products',pathMatch: 'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    ProductItemsComponent,
    CategoryItemsComponent,
    SearchProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
