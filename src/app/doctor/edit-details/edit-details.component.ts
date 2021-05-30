import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  Id?: number;
  myForm = this.formBuilder.group({Name: '', Gender: ''});

  constructor(private doctorService: DoctorService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = Number(this.route.snapshot.paramMap.get('doctorId'));
  }

  onSubmit(): void{
    window.alert('Your order has been submitted' + this.myForm.value);
    this.myForm.reset();
  }
}
