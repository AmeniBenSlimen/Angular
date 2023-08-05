import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dom',
  templateUrl: './Dom.component.html',
  styleUrls: ['./Dom.component.css']
})

export class DomComponent {
  Design ='Design';
  description1 ='Make your projects look great and interact beautifully.'
  Develop = 'Develop'
  description2 = 'Use modern tools to turn your design into a web site'
  Deploy ='Deploy'
  description3 = 'Use modern tools to turn your design into a web site'

  constructor( private db:DatabaseService){
  
  }
  get(){
    this.db.getData().subscribe({
      next: (next) => console.log(next),
      error: (error) => console.error(error),
      complete: () => console.info('complete')
    })
  }
  }
