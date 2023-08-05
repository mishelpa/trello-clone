import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html'
})
export class ScrollComponent implements OnInit {

  products: Product[] = []

  constructor( private todoService: TodoService ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.todoService.getProducts().subscribe(data => this.products = data)
  }
}
