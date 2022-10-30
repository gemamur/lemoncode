import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-privateheader',
  templateUrl: './privateheader.component.html',
  styleUrls: ['./privateheader.component.scss']
})
export class PrivateheaderComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  username:string="";

  ngOnInit(): void {
    this.username = this._auth.getUserName();
  }

}
