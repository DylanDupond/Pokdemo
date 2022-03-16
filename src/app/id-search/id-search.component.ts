import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-search',
  templateUrl: './id-search.component.html',
  styleUrls: ['./id-search.component.css']
})
export class IdSearchComponent implements OnInit {
  id:string ='';
  name4Sort:string='';
  curPoke :string='';
  pokedex:Pokemon[] = [new Pokemon(4,"Salameche"),new Pokemon(403,"Lixy"),new Pokemon(551,"Mascaiman"),new Pokemon(656,"Grenousse")];

  constructor() {
  }

  IChooseU(){
    console.log(this.curPoke);
  }
  ngOnInit(): void {
  }

}
