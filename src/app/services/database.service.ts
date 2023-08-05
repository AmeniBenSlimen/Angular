import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  data!: Observable<string>;

  constructor() { }
getData(){
  this.data = new Observable(ob => {
    setTimeout(() => {
      ob.next('first')
    },1000);
    setTimeout (() => {
      ob.next('second')
    },2000);
    setTimeout(() => {
      ob.next('third')
    },3000);
    setTimeout(() => {
      ob.complete()
    },7000);
  })
  return this.data
}
  
}
