import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient = inject(HttpClient);

  url = 'https://jsonplaceholder.typicode.com/users'; // URL base da API
  headers = new HttpHeaders({ // Cabeçalhos da requisição
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token',
  });

  constructor() { }

  getUser(){
    return this.httpClient.get(this.url, { headers: this.headers });
  }

  listUsers(){
    const query = new HttpParams()
    .set('page', '1')
    .set('limit', '10');

    this.url = 'https://jsonplaceholder.typicode.com/users?page=1&limit=10';
    return this.httpClient.get(this.url+query.toString(), { headers: this.headers });
  }
}
