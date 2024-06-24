import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocloginService } from '../doclogin.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {

  constructor(private docLoginService : DocloginService,private router:Router){}

  username:string = "";
  password:string = "";
  invalidLogin : boolean = false;


  checkLogin(){
    if(this.docLoginService.authenticate(this.username,this.password)){
      this.router.navigate(['doctor']);
      this.invalidLogin = false;
    
    }else{
      this.invalidLogin = true;
      alert("invalid Credentials!");
      this.router.navigate(['home']);
     
    }
  }


}
