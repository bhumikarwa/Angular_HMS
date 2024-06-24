import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
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

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'add-appointment',component:AddAppointmentComponent},
  {path:'add-patient',component:AddPatientComponent},
  {path:'update-patient/:id',component:UpdatePatientComponent},
  {path:'view-patient/:id',component:ViewPatientComponent},
  {path:'home',component:HomeComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'add-medicine',component:AddMedicineComponent},
  {path:'update-medicine/:id',component:UpdateMedicineComponent},
  {path:'view-medicine/:id',component:ViewMedicineComponent},
  {path:'doclogin',component:DocloginComponent},
  {path:'adlogin',component:AdloginComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
