import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {

  patient:Patient = new Patient();

  constructor(private patientService:PatientService, private router:Router){}

  onSubmit(){
    this.patientService.addPatient(this.patient).subscribe(data => {
      this.goBack();
    });
   
  }

  goBack(){
    this.router.navigate(['/doctor']);
  }

}
