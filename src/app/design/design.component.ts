import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {

  usersData: any;

  constructor(private http:HttpClient){
        this.http.get('https://jsonplaceholder.typicode.com/users',{observe : "response"}).subscribe(data => {
          this.usersData = data;
    })
  }


}
