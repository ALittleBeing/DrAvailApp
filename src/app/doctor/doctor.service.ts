import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { doctor, Doctor } from './doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  Doctors: doctor[] = [];
  constructor(private http: HttpClient) { }

  getDoctors(){
    return this.http.get<doctor[]>('/assets/doctors.json');
  }

  getDoctorByID(Id: number){
    let doctor1: doctor | undefined;
    this.getDoctors().subscribe((data) => doctor1 = data.find(d => d.ID === Id));
    return doctor1;
  }
}
