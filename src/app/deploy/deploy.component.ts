import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.css']
})
/* export class DeployComponent {
 
  usersData: any;

  constructor(private http:HttpClient){
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
          this.usersData = data;
    })
  }
  
  onSubmit(f: any) {
  console.log(f)
 }
} */
export class DeployComponent implements OnInit {
  nameForm: FormGroup;
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.nameForm.valid) {
      const firstName = this.nameForm.get('firstName')?.value;
      const lastName = this.nameForm.get('lastName')?.value;
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      this.submitted = true;
    }
  }
}
