import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

constructor(private apptService:AppointmentService){}

appointments : Appointment[] =[];

ngOnInit():void{
  this.getAppointments();
}

getAppointments(){
  this.apptService.getAllAppointments().subscribe(data => {
    this.appointments = data;
  })
}

deleteAppointment(id:number){
this.apptService.deleteAppointment(id).subscribe(data => {
  console.log(data);
  this.getAppointments();
})
}

}
