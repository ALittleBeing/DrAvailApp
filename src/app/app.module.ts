import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DoctorsListComponent } from './doctor/doctors-list/doctors-list.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';

import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EditDetailsComponent } from './doctor/edit-details/edit-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsListComponent,
    NavComponent,
    DoctorDetailsComponent,
    EditDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule,
    LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
    MatGridListModule, MatFormFieldModule, MatInputModule,MatSelectModule,MatDatepickerModule,
    ReactiveFormsModule,MatSnackBarModule,MatNativeDateModule,MatStepperModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
