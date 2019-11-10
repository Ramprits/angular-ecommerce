import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}
  getItems(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:1337/items');
  }
}
