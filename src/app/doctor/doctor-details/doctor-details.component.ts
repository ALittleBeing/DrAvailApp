import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Gender,doctor } from '../doctors';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  Doctor: doctor | undefined;
  constructor(private route: ActivatedRoute, private doctorService: DoctorService) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const doctorIdfromRoute = Number(routeParam.get('doctorId'));

    this.doctorService.getDoctors().subscribe((data) => this.Doctor = data.find(d => d.ID === doctorIdfromRoute));

  }

}


var doctors=[ {
  ID: 2,
  Name: "Dr A",
Gender: Gender.Male},
{
  ID: 3,
  Name: "Dr N",
  Gender: Gender.Female
}, 
{
  ID: 4,
  Name: "Dr Z",
  Gender: Gender.Male
}]