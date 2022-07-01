import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  profileForm = new FormGroup({
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


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.registerObjectToArray();
  }


  registerObjectToArray(){
    
    type MyRegisterResponse = { [key: string]: User };

    let result = Object.entries(this.profileForm.value as MyRegisterResponse).map(([key, value]) => {
      return {
        ...value,
        id: key,
      }
    });
    console.log(result);
  }


}

