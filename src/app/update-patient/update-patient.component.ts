import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {

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

  onSubmit(){
    this.patientService.updatePatient(this.id,this.patient).subscribe(data => {
      this.goBack();

    })
  };
   
  goBack(){
    this.router.navigate(['/doctor']);
  }


}
