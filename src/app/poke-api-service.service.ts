import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeApiServiceService {
  public shiny = new Subject<boolean>();
  constructor(private http : HttpClient) {
    this.shiny.next(false)
   }





  GetShine(): Subject<boolean>{
    return this.shiny;
  }

  SetShine(val : boolean){
  this.shiny.next(val);
  }
  CatchEmAll(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=898');
  }

  CatchIt(id : string){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+id);
  }
}
