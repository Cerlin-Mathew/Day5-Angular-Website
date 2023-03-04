import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './units/destination/destination.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component:AboutComponent },
  {
  
    path:'about',component:AboutComponent
  },
  {
  
  path:'homepage',component:HomepageComponent
},
{
  path:'destination',component:DestinationComponent
},{
  path:'signup',component:SignupComponent
},
{
  path:'login',component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
