import { Component } from '@angular/core';
import { AdloginService } from '../adlogin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent  {

  constructor(private adLoginService : AdloginService,private router:Router){}
  

  username:string = "";
  password:string = "";
  invalidLogin : boolean = false;


  checkLogin(){
    if(this.adLoginService.authenticate(this.username,this.password)){
      this.router.navigate(['admin']);
      this.invalidLogin = false;
    
    }else{
      this.invalidLogin = true;
      alert("invalid Credentials!");
      this.router.navigate(['home']);
     
    }
  }

  

  

}
