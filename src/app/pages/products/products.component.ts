import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../data/product.data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  suggestions: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  onSearch(): void {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.filteredProducts = [...this.products];
      this.suggestions = [];
      return;
    }

    this.suggestions = this.products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    this.filteredProducts = [...this.suggestions];
  }

  selectSuggestion(name: string): void {
    this.searchTerm = name;
    this.suggestions = [];
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  updateProduct(updatedProduct: Product): void {
    this.productService.updateProduct(updatedProduct);
  }
}
