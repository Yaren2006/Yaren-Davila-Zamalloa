import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private apiUrl = 'http://localhost:8080/api/catalog';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories`);
  }

  getProductsByCategory(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/category/${id}`);
  }
}
