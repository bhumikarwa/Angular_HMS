import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrl: './view-medicine.component.css'
})
export class ViewMedicineComponent {

  medicine : Medicine = new Medicine();
  id:number = 0;

  constructor(private medicineService : MedicineService, private router:Router,private route:ActivatedRoute){}

  ngOnInit() : void {
    this.id = this.route.snapshot.params['id'];
   this.getMedicineById();
  }

  getMedicineById(){
    this.medicineService.getMedicine(this.id).subscribe(data => {
    this.medicine = data;
  })
};
}
