import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { AdloginService } from '../adlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  patients:Patient[] = [];

  ngOnInit():void{
    this.getPatients();
  }

  constructor(private patientService:PatientService,private adloginservice:AdloginService,private router:Router){}

  getPatients(){
    this.patientService.getPatientList().subscribe(data =>{
      this.patients = data;
    })
  }

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    })
  }

  logout(){
    this.adloginservice.logout();
    this.router.navigate(['home']);
  }
}
