import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctors';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  doctors: doctor[];
  constructor() {
    var doctor1: doctor = {
      ID: 2,
      Name: "Dr A"
    }
    var doctor2: doctor = {
      ID: 3,
      Name: "Dr N"
    }
    var doctor3: doctor = {
      ID: 4,
      Name: "Dr Z"
    }
    this.doctors = [doctor1, doctor2, doctor3];

   }

  ngOnInit(): void {
  }

}

class doctor{
  ID: number;
  Name: string;

  constructor(id:number, name:string){
    this.ID = id;
    this.Name = name;
  }
  
}