import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from "src/app/services/user/user.service";
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;

  registerForm = new FormGroup({
    username: new FormControl(' '),
    name: new FormControl(' '),
    surname: new FormControl(' '),
    dob: new FormControl(' '),
    email: new FormControl(' '),
    password: new FormControl(' '),
    address: new FormControl(' '),
    city: new FormControl(' '),
    cardNumber: new FormControl(' '),
})


  constructor(private userS: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.log(this.registerForm.value);
    this.userS.saveUsersData(this.registerForm.value).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/login']);

    });
  }

}

