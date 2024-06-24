import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { DocloginService } from '../doclogin.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {

  medicines:Medicine[] = [];

  ngOnInit():void{
    this.getMedicines();
  }

  constructor(private medicineService:MedicineService,private router:Router,private docLoginService:DocloginService){}

  getMedicines(){
    this.medicineService.getAllMedicines().subscribe(data =>{
      this.medicines = data;
    })
  }

  deleteMedicine(id:number){
    this.medicineService.deleteMedicine(id).subscribe(data => {
      console.log(data);
      this.getMedicines();
    })
    }

    updateMedicine(id:number){
      this.router.navigate(['/update-medicine',id]);
    }

    viewMedicine(id:number){
      this.router.navigate(['/view-medicine',id]);
    }
     
  logout(){
    this.docLoginService.logout();
    this.router.navigate(['home']);
  }

}
