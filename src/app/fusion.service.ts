import { Observable, of, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FUSIONService {

public id =  new Subject<string>();
  constructor() {
   }

  getID():Subject<string>{
    return this.id;
  }

  setID(id : string){
   this.id.next(id);
  }

}
