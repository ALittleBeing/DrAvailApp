import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsListComponent} from './doctor/doctors-list/doctors-list.component';
import {DoctorDetailsComponent} from './doctor/doctor-details/doctor-details.component';
import { EditDetailsComponent } from './doctor/edit-details/edit-details.component';

const routes: Routes = [
  {path: 'doctors', component: DoctorsListComponent},
  {path: 'doctors/:doctorId', component:DoctorDetailsComponent },
  {path: 'doctors/edit/:doctorId', component: EditDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
