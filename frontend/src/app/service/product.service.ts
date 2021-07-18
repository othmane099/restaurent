import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  getProducts(page,size):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}allProducts?page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getProductsByCategoryId(id,page,size): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}category?id=${id}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getProductsByKey(key,page,size): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}search?word=${key}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getProductById(id): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}product?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }

  getProductsLength(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}productscount`).pipe(
      map(
        response => response
      )
    )
  }
  getProductsLengthByCategoryId(id): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}categoryidsize?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }
  getProductsLengthByKey(word): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}keysize?key=${word}`).pipe(
      map(
        response => response
      )
    )
  }
}
