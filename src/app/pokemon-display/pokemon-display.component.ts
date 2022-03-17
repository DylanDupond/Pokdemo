import { Component, OnInit } from '@angular/core';
import { PokeApiServiceService } from '../poke-api-service.service';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css']
})
export class PokemonDisplayComponent implements OnInit {
  name:string='';
  id:string='';
  hp:string='';
  atk:string='';
  def:string='';
  atkSP:string='';
  defSP:string='';
  vit:string='';
  sprite:string='';

  constructor(private _pokService:PokeApiServiceService) {
    this._pokService.CatchIt().subscribe((res: any) => {
      this.name= res.name;
      this.id=res.id
      this.hp=res.stats[0].base_stat;
      this.atk=res.stats[1].base_stat;
      this.def=res.stats[2].base_stat;
      this.atkSP=res.stats[3].base_stat;
      this.defSP=res.stats[4].base_stat;
      this.vit=res.stats[5].base_stat;
      this.sprite=res.sprites.front_default
  });
}

  ngOnInit(): void {
  }

}
