export interface ToDo {
  id: string;
  title: string;
}

export interface Column {
  title: string;
  todos: ToDo[];
  show: boolean;
}

export interface Product {
  id: string;
  title: string;
  images: string[];
  price: any
}
