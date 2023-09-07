import { Component } from '@angular/core';
import { Carinfo} from "../../carinfo";



@Component({
  selector: 'app-catalog',
  template: `
    <section class="results">

      <app-car-info
      *ngFor="let carinform of carinfoList"
      [carinfo]="carinform">

      </app-car-info>
    </section>
  `,
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  readonly baseUrl = 'src/app/pictures';

 carinfoList: Carinfo [] = [
    {
      id: 0,
      name: 'Aston Martin',
      model: 'Vanquish',
      address: '/detailsOne',
      //photo: `<img src="src/app/pictures/det1.jpg" alt="Пример">`,
      hp: 565,
      speed: 275,
      volume: 'V12 6.0'
    },
    {
      id: 1,
      name: 'Audi',
      model: 'R8',
      address: '/detailsTwo',
      //photo: `<img src="det1.jpg" alt="Пример">`,
      hp: 540,
      speed: 280,
      volume: 'V8 4.2'
    },
    {
      id: 2,
      name: 'Ford',
      model: 'GT40',
      address: '/detailsThree',
     // photo: `<img src="det1.jpg" alt="Пример">`,
      hp: 306,
      speed: 290,
      volume: 'V8 4.7'
    },
    {
      id: 3,
      name: 'Bugatti',
      model: 'Veyron',
      address: '/detailsFour',
      //photo: `<img src="det1.jpg" alt="Пример">`,
      hp: 1200,
      speed: 430,
      volume: 'W16 8.0'
    },
    {
      id: 4,
      name: 'Corvette',
      model: 'ZR1',
      address: '/detailsFive',
      // photo: `<img src="det1.jpg" alt="Пример">`,
      hp: 755,
      speed: 350,
      volume: 'V8 6.2'
    },
     {
         id: 5,
         name: 'Koenigsegg',
         model: 'Regera',
         address: '/detailsSix',
         // photo: `<img src="det1.jpg" alt="Пример">`,
         hp: 1100,
         speed: 460,
         volume: 'V8 5.0'
     },
    {
      id: 6,
      name: 'Lamborghini',
      model: 'Huracan',
      address: '/detailsSeven',
      // photo: `<img src="det1.jpg" alt="Пример">`,
      hp: 602,
      speed: 380,
      volume: 'V10 4.2'
    },
    {
      id: 7,
      name: 'Mercedes Benz',
      model: 'SLS AMG',
      address: '/detailsEight',
      // photo: `<img src="det1.jpg" alt="Пример">`,
      hp: 569,
      speed: 370,
      volume: 'V8 6.2'
    },

    {
      id: 8,
      name: 'Jaguar',
      model: 'F-Type Coupe',
      address: '/detailsNine',
      // photo: `<img src="det1.jpg" alt="Пример">`,
      hp: 465,
      speed: 330,
      volume: 'V6 5.2'
    }
  ];
}

