import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privatemenu',
  templateUrl: './privatemenu.component.html',
  styleUrls: ['./privatemenu.component.scss']
})
export class PrivatemenuComponent implements OnInit {

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this._auth.logout();
    this._router.navigate(["/"]);
  }
}
