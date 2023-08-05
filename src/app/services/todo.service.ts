import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url: string = 'https://api.escuelajs.co/api/v1/products'

  constructor( private httpClient: HttpClient ) { }

  getProducts() {
    return this.httpClient.get<Product[]>(this.url)
  }
}
