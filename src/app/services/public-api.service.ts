import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {
  httpClient = inject(HttpClient);
  baseUrl = 'https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8'
  headers: any = new HttpHeaders({
    'X-RapidAPI-Key': '5cb3c5eeddmsh0343bfb174e5695p1e9122jsn0f748ef5d48f',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  });

  constructor() { }

  getArtist(){
    return this.httpClient.get(this.baseUrl, { headers: this.headers })
  }

  getPokemon(): Observable<any>{
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    const params = new HttpParams()
    .set('limit', '10')
    .set('offset', '0');

    let urlFinal = `${baseUrl}?${params.toString()}`;
    return this.httpClient.get(urlFinal);
  }

  getRickAndMortyCharacter(id: number): Observable<any>{
    let baseUrl = 'https://rickandmortyapi.com/api/character';
    return this.httpClient.get(`${baseUrl}/${id}`);    
  }
}
