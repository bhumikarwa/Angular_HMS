import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AppointmentComponent,
    AddAppointmentComponent,
    HomeComponent,
    DoctorComponent,
    AddPatientComponent,
    MedicineComponent,
    AddMedicineComponent,
    UpdatePatientComponent,
    DocloginComponent,
    AdloginComponent,
    UpdateMedicineComponent,
    ViewMedicineComponent,
    ViewPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
