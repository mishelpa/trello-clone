import { Component } from '@angular/core';
import { Product } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'image', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true })

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.getProducts()

    this.input.valueChanges
    .pipe(debounceTime(300)) //Espera a que se termine de escribir en el input
    .subscribe(value => {
      this.dataSource.find(value);
    })
  }

  getProducts() {
    this.todoService.getProducts().subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    })
  }

  update(product: Product) {
    this.dataSource.update(product.id, {price: 20})
  }
}
