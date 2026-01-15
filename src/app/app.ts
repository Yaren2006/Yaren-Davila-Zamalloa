import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './services/catalog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {

  categories: any[] = [];
  products: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.catalogService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onCategoryChange(event: any) {
    const id = event.target.value;
    if (id) {
      this.catalogService.getProductsByCategory(id).subscribe(data => {
        this.products = data;
      });
    } else {
      this.products = [];
    }
  }
}
