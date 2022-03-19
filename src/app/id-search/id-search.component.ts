import { FUSIONService } from './../fusion.service';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { PokeApiServiceService } from '../poke-api-service.service';

@Component({
  selector: 'app-id-search',
  templateUrl: './id-search.component.html',
  styleUrls: ['./id-search.component.css']
})
export class IdSearchComponent implements OnInit {
  id:string ='';
  name4Sort:string='';
  curPoke :string='';
  //pokedex:Pokemon[] = [new Pokemon(4,"Salameche"),new Pokemon(403,"Lixy"),new Pokemon(551,"Mascaiman"),new Pokemon(656,"Grenousse")];
  pokedex : any;
  constructor(private _pokService:PokeApiServiceService,private _fus:FUSIONService) {
    _fus.setID("4");
    this._pokService.CatchEmAll().subscribe((res: any) => {
      this.pokedex = res.results;
  });
}

  IChooseU(){
    this._fus.setID(this.curPoke);
  }
  ngOnInit(): void {
  }

}
