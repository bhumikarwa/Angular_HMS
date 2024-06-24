import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {

  patient:Patient = new Patient();
  id:number = 0;
  constructor(private patientService:PatientService, private router:Router,private route:ActivatedRoute){}

  ngOnInit() : void {
    this.id = this.route.snapshot.params['id'];
   this.getPatientById();
  }

  getPatientById(){
    this.patientService.getPatient(this.id).subscribe(data => {
    this.patient = data;
  })
};

}
