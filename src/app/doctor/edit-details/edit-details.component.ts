import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { District } from '../doctors';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  Id?: number;
  enumDistrict = District;
  districts = Object.values(this.enumDistrict).filter(value => isNaN(Number(value)) === true);
  currentYear = new Date().getFullYear();
  minDate: Date = new Date(this.currentYear - 120, 0, 1);
  maxDate: Date  = new Date(this.currentYear - 25, 11, 31);
  firstFormGroup = this.formBuilder.group({
    Name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(25)]), 
    Gender: new FormControl('',Validators.required), 
    DOB: new FormControl('',Validators.required),
    RegNumber:''
  });

  secondFormGroup = this.formBuilder.group({
    City: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]), 
    District: new FormControl('',Validators.required), 
    Pincode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
    PhoneNumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
  });

  constructor(
    private doctorService: DoctorService, 
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) {
      //this.districts = Object.keys(this.enumDistrict).filter(value => typeof value === "string");
     }

  ngOnInit(): void {
    this.Id = Number(this.route.snapshot.paramMap.get('doctorId'));
  }

  onSubmit(): void{
    //window.alert('Your order has been submitted' + this.myForm.get('Name'));
    this._snackBar.open('Your form has been submitted, ' +  this.firstFormGroup.get('Name')?.value, 'Ok', {
      duration: 3000
    });
    this._snackBar.open('Your form has been submitted, ' +  this.secondFormGroup.get('Pincode')?.value, 'Ok', {
      duration: 3000
    });
    this.firstFormGroup.reset();
  }
}
