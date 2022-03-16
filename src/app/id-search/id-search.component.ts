import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-search',
  templateUrl: './id-search.component.html',
  styleUrls: ['./id-search.component.css']
})
export class IdSearchComponent implements OnInit {
  id:string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
