import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product
  constructor(private productService:ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductById()
  }

  getProductById(){
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.productService.getProductById(id).subscribe(
      data => this.product = data
    )
  }



}
