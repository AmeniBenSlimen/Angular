import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.css']
})
export class DeployComponent {

  usersData: any;

  constructor(private http:HttpClient){
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
          this.usersData = data;
    })
  }
}
