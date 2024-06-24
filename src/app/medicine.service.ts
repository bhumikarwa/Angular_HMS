import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) {}
  
  MED_URL = "http://localhost:8080/api/medicines"

  getAllMedicines() : Observable<Medicine[]>{ 
    return this.http.get<Medicine[]>(`${this.MED_URL}`);
  }

  addMedicine(medicine:Medicine) : Observable<Medicine>{
    return this.http.post<Medicine>(`${this.MED_URL}`,medicine,{responseType:'json'});
  }

  deleteMedicine(id:number) : Observable<object>{
    return this.http.delete(`${this.MED_URL}/${id}`);
  }

  updateMedicine(id:number, medicine:Medicine) : Observable<Medicine>{
    return this.http.put<Medicine>(`${this.MED_URL}/${id}`,medicine);
  }

  getMedicine(id:number) : Observable<Medicine>{
    return this.http.get<Medicine>(`${this.MED_URL}/${id}`);
  }
}
