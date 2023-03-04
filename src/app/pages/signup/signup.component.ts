import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private heroService: HeroService) {}

  userName: any;
  userEmail: any;
  userContact: any;
  userPassword: any;

  signIn= () => {
    const userData = {
      userName: this.userName,
      userEmail: this.userEmail,
      userContact: this.userContact,
      userPassword: this.userPassword
    };

    this.heroService.addData(userData);
    this.heroService.readData();
    this.heroService.deleteData();
  };

}
