import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public mail: string = '';

  public password: string = '';

  constructor(private userS: UserService) { }

  ngOnInit(): void {
  }


  login(){
    this.userS.login(this.mail, this.password);
  }

}
