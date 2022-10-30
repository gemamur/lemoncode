import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginValid:boolean=true;
  public dataUser:{} = {};
  public usuario:string = '';
  public password:string = '';

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.loginValid = this._auth.login(this.usuario, this.password);
    if(this.loginValid){
      this.dataUser = {"isLogged": "true", "username":this.usuario};
      localStorage.setItem("dataUser", JSON.stringify(this.dataUser));
      this._router.navigate(["/dashboard"]);
    }
  }

}
