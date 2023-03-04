import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class HeroService {
  

  addData = (body: any) => {
    console.log(body);
    
    localStorage.setItem('DATA', body);
    console.log('Local Storage data set');
  };

  readData = () => {
    localStorage.getItem('DATA');
    console.log('Data fetched');
  };

  deleteData = () => {
    localStorage.clear();
    console.log('DATA cleared');
  };
}
