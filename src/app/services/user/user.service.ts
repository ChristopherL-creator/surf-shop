import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private readonly BASE_URL = 'https://628d3321a3fd714fd040dac4.mockapi.io/users';
  
  public user?: User; 

  constructor(private http: HttpClient, private router: Router) { }
  
  login(mail: string, password: string) {
    const url = this.BASE_URL + '?email=' + mail; 
    this.http.get<User[]>(url).subscribe({ 
      next: users => {  
        // console.log(password);
        // console.log(users[0].password);         
        if (users[0].password === password) {
          // console.log('bella'); 
          this.user = users[0]; 
          this.router.navigate(['/user']);
        } else { 
          alert('User name o poassword incorretti!');
        }
      }, 
      error: err => console.log(err)
    })
  } 

  logout() {
    this.user = undefined;
  } 
}
