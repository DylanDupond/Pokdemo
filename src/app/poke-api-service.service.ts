import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokeApiServiceService {
  constructor(private http : HttpClient) { }

  CatchEmAll(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=898');
  }

  CatchIt(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+4);
  }
}
