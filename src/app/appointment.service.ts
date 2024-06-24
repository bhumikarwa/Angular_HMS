import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) {}
  
  APPT_URL = "http://localhost:8080/api/appointments"

  getAllAppointments() : Observable<Appointment[]>{ 
    return this.http.get<Appointment[]>(`${this.APPT_URL}`);
  }

  addAppointment(appointment:Appointment) : Observable<Appointment>{
    return this.http.post<Appointment>(`${this.APPT_URL}`,appointment,{responseType:'json'});
  }

  deleteAppointment(id:number) : Observable<object>{
    return this.http.delete(`${this.APPT_URL}/${id}`);
  }


}
