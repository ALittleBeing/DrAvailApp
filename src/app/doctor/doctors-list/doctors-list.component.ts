import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor, Gender, doctor } from '../doctors';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {

  doctors: doctor[]| undefined;
  constructor(private doctorService: DoctorService) {
    this.doctorService.getDoctors().subscribe((data) => this.doctors = data);
   }

  ngOnInit(): void {
  }

}

