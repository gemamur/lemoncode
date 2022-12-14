import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  constructor(
    private _auth: AuthService) { }

  ngOnInit(): void {
  }

  getUserLogged():boolean{
    return this._auth.isLogged();
  }

}
