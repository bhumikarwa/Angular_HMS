import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient : HttpClient) { }

  PATIENT_URL="http://localhost:8080/api/patients";

  getPatientList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.PATIENT_URL}`);
  }

  addPatient(patient:Patient) : Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.PATIENT_URL}`,patient);
  }

  deletePatient(id:number) : Observable<object>{
    return this.httpClient.delete(`${this.PATIENT_URL}/${id}`);
  }

  updatePatient(id:number, patient:Patient) : Observable<Patient>{
    return this.httpClient.put<Patient>(`${this.PATIENT_URL}/${id}`,patient);
  }

  getPatient(id:number) : Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.PATIENT_URL}/${id}`);
  }
  
}
