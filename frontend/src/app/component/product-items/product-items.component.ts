import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  products: Product[] = []
  pageLength: number = 10;
  orderSize: number = 0;
  page: number = 1
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => this.handleProductsRoute()
    )
  }

  handleProductsRoute(){
    let result1 = this.route.snapshot.paramMap.has('id');
    let result2 = this.route.snapshot.paramMap.has('key');
    if(result1){
      this.getProductsByCategoryId()
    } else if (result2) {
      this.getAllProductsContainingKey()
    } else {
      this.getProducts();
    }
  }

  getProducts(){
    this.productService.getProductsLength().subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.productService.getProducts(this.page-1,this.pageLength).subscribe(
      data => {
        this.products = data
      }
    )
  }

  getProductsByCategoryId(){
    let idCategory = this.route.snapshot.paramMap.get('id');
    this.productService.getProductsLengthByCategoryId(idCategory).subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.productService.getProductsByCategoryId(idCategory,this.page-1,this.pageLength).subscribe(
      data => {
        this.products = data
      }
    )
  }

  getAllProductsContainingKey(){
    let keyWord = this.route.snapshot.paramMap.get('key');
    this.productService.getProductsLengthByKey(keyWord).subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.productService.getProductsByKey(keyWord,this.page-1,this.pageLength).subscribe(
      data => {
        this.products = data
      }
    )
  }

  doing() {
    this.handleProductsRoute()
  }

  pageSize(event: Event) {
    this.pageLength = +(<HTMLInputElement>event.target).value
    this.handleProductsRoute()
  }
}
