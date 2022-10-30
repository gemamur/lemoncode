import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  public login(usuario:string, password:string):boolean{
      if(usuario === "master8@lemoncode.net" && password === "12345678" ){
        return true;
    } else {
        return false;
    }
  }

  public logout():void{
    localStorage.clear();
  }

  public isLogged():boolean{
    const dataUser:string|null = JSON.parse(localStorage.getItem("dataUser")!);
    if(dataUser!=null){
      return JSON.parse(localStorage.getItem("dataUser")!).isLogged;
    }
    return false;
  }

  public getUserName():string{
    const dataUser:string|null = JSON.parse(localStorage.getItem("dataUser")!);
    if(dataUser!=null){
      return JSON.parse(localStorage.getItem("dataUser")!).username;
    }
    return "";
  }
}