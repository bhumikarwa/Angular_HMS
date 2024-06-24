import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';



@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {
  medicine : Medicine = new Medicine();

  constructor(private medicineService : MedicineService, private router:Router){}

  onSubmit(){
    console.log(this.medicine);
    this.medicineService.addMedicine(this.medicine).subscribe(data => {
        console.log(data);
        this.goToMedicineList();
    });
  }

  goToMedicineList(){
    this.router.navigate(["/medicine"])
  }


}
