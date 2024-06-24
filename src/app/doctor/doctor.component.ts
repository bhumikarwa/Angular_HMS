import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocloginService } from '../doclogin.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

  patients:Patient[] = [];

  ngOnInit():void{
    this.getPatients();
  }

  constructor(private patientService:PatientService,private router:Router,private docLoginService:DocloginService){}

  getPatients(){
    this.patientService.getPatientList().subscribe(data =>{
      this.patients = data;
    })
  }

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(data => {
      this.getPatients();
    })
  }

  updatePatient(id:number){
    this.router.navigate(['/update-patient',id]);
  }

  viewPatient(id:number){
    this.router.navigate(['/view-patient',id]);
  }

  
  logout(){
    this.docLoginService.logout();
    this.router.navigate(['home']);
  }
  

}
