import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: any;
  userPassword: any;

  signIn = () => {
    
    console.log(this.userName);
    console.log(this.userPassword);
  };

}
