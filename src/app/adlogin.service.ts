import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdloginService  implements CanActivate{

  constructor(private router:Router) { }

  canActivate(){
    if(this.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['adlogin']);
      return false;
    }
  }

  authenticate(username:string, password:string){
    if(username == "aa" && password == "aa"){
      sessionStorage.setItem("username",username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn() : boolean {
    let user = sessionStorage.getItem("username");
    if(user != null){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    sessionStorage.removeItem("username");
  }


}
