import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  output:any;
  name: string;
  gender:'nam';
  age: number;
  email:string;
  showprofile(){
    return this.output = [this.name,this.age,this.gender,this.email];
  };
}
