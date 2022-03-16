import { Component, Directive, OnInit } from '@angular/core';
import { IdSearchComponent } from '../id-search/id-search.component';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'],
  entryComponents:[IdSearchComponent]
})
export class InterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
