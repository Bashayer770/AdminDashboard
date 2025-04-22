import { Injectable } from '@angular/core';
import { Product } from '../data/product.data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products = [
    { id: 1, name: 'Wireless Mouse', price: 29.99, stock: 120 },
    { id: 2, name: 'Phone case', price: 15.0, stock: 0 },
    { id: 3, name: 'Standing Desk', price: 199.99, stock: 20 },
    { id: 4, name: 'Wireless Keyboard', price: 29.99, stock: 120 },
    { id: 5, name: 'Screens', price: 15.0, stock: 0 },
    { id: 6, name: 'Tablet', price: 199.99, stock: 40 },
    { id: 7, name: 'Laptop Case', price: 29.99, stock: 120 },
    { id: 8, name: 'sneakers', price: 1500, stock: 3 },
    { id: 9, name: 'Use Cable', price: 199.99, stock: 40 },
    { id: 10, name: 'Bag', price: 399.99, stock: 15 },
    { id: 11, name: 'Shoes', price: 200, stock: 14 },
    { id: 12, name: 'Shirt', price: 195.99, stock: 60 },
    { id: 13, name: 'Key chain', price: 50, stock: 2 },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((p) => p.id === id);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = { ...updatedProduct };
    }
  }
}
