import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient = inject(HttpClient);

  url = 'http://localhost:3000/pacientes'; // URL base da API

  // Caso sua requisição tenha cabeçalhos, crie um objeto HttpHeaders
  // e passe os cabeçalhos que você deseja adicionar
  headers = new HttpHeaders({ // Cabeçalhos da requisição
    'Content-Type': 'application/json', // Tipo de conteúdo a ser enviado
  });

  constructor() { }

  getUser(id: number){
    return this.httpClient.get(`${this.url}/${id}`, { headers: this.headers });
  }

  listUsers(){
    // Caso sua url tenha parametros de rotas (ex: /users?page=1&limit=10)
    // utilize o HttpParams para criar os parametros
    const query = new HttpParams()
    .set('page', '1')
    .set('limit', '10');
    return this.httpClient.get(this.url+query.toString(), { headers: this.headers });
  }

  createUser(user: any){
    return this.httpClient.post(this.url, user, { headers: this.headers });
  }
}
