import { Component } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from './patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_hospital_mgmt';

}
