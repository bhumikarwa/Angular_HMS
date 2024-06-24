import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {

  appointment : Appointment = new Appointment();

  constructor(private appointmentService : AppointmentService, private router:Router){}

  onSubmit(){
    console.log(this.appointment);
    this.appointmentService.addAppointment(this.appointment).subscribe(data => {
        console.log(data);
        this.goToAppointmentList();
    });
  }

  goToAppointmentList(){
    this.router.navigate(["/appointment"])
  }

}
