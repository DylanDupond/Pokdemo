import { PokemonDisplayComponent } from './../pokemon-display/pokemon-display.component';
import { PokeApiServiceService } from './../poke-api-service.service';
import { Component, Directive, OnInit } from '@angular/core';
import { IdSearchComponent } from '../id-search/id-search.component';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'],
  entryComponents:[IdSearchComponent,PokemonDisplayComponent]
})
export class InterfaceComponent implements OnInit {
  poks = null;

  constructor() {}




  ngOnInit(): void {
  }

}
