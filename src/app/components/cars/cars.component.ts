import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  name: string | undefined;
  speed: number | undefined;
  volume:string | undefined;
  hp: number | undefined;
  model: string | undefined;
  colors: Colors | any;
  options: string[] | any;
  isEdit: boolean = false;


  constructor() { }


  ngOnInit() {
    this.name = 'Aston Martin';
    this.volume = 'V12 6.0';
    this.hp = 565;
    this.speed = 275;
    this.model = 'Vanquish ';
    this.colors = {
      car: 'Серый',
      salon: 'Черный',
      wheels: 'Серебристые'
    };
    this.options = ['ABS', 'ASR', 'ESP', 'AutoParking'];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt(option: any) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option: any) {
    for (let i = 0; i < this.options.length; i ++) {
      if (this.options[i] == option)
        this.options.splice(i, 1);
      break;
    }
  }

  carSelect(carName: any) {
    if (carName == 'astonMartin') {
      this.name = 'Aston Martin';
      this.volume = 'V12 6.0';
      this.hp = 565;
      this.speed = 275;
      this.model = 'Vanquish ';
      this.colors = {
        car: 'Серый',
        salon: 'Черный',
        wheels: 'Серебристые'
      };
      this.options = ['ABS', 'ASR', 'ESP', 'AutoParking'];

    } else if (carName =='audi') {
      this.name = 'Audi';
      this.model = 'R8';
      this.volume = 'V8 4.2';
      this.hp = 540;
      this.speed = 280;
      this.colors = {
        car: 'Желтый',
        salon: 'Черный',
        wheels: 'Черный'
      };
      this.options = ['ABS', 'ESP', 'AutoParking'];

    } else if (carName =='ford') {
      this.name = 'Ford';
      this.volume = 'V8 4.7';
      this.hp = 306;
      this.speed = 290;
      this.model = 'GT40';
      this.colors = {
        car: 'Серый',
        salon: 'Черный',
        wheels: 'Черный'
      };
      this.options = ['ABS', 'ESP', 'AutoParking', 'ASR'];


    } else if (carName =='bugatti') {
      this.name = 'Bugatti';
      this.volume = 'W16 8.0';
      this.hp = 1200;
      this.speed = 430;
      this.model = 'Veyron';
      this.colors = {
        car: 'Черно-оранжевый',
        salon: 'Черный',
        wheels: 'Оранжевый'
      };
      this.options = ['ABS', 'ESP', 'AutoParking'];

    } else if (carName =='corvette') {
      this.name = 'Corvette ';
      this.volume = 'V8 6.2';
      this.hp = 755;
      this.speed = 350;
      this.model = 'ZR1';
      this.colors = {
        car: 'Оранжевый',
        salon: 'Серый',
        wheels: 'Черный'
      };
      this.options = ['ABS', 'ESP', 'AutoParking'];

    } else if (carName =='koen') {
      this.name = 'Koenigsegg ';
      this.speed = 460;
      this.volume = 'V8 5.0';
      this.hp = 1100;
      this.model = 'Regera';
      this.colors = {
        car: 'Красный',
        salon: 'Красный',
        wheels: 'Черный'
      };
      this.options = ['ABS', 'ESP', 'AutoParking'];

    } else if (carName =='lambo') {
      this.name = 'Lamborghini ';
      this.volume = 'V10 4.2';
      this.hp = 602;
      this.speed = 380;
      this.model = 'Huracan ';
      this.colors = {
        car: 'Желтый',
        salon: 'Черный',
        wheels: 'Черный'
      };
      this.options = ['ABS', 'ESP', 'AutoParking'];

    } else if (carName =='mercedes') {
      this.name = 'Mercedes Benz  ';
      this.volume = 'V8 6.2';
      this.hp = 569;
      this.speed = 370;
      this.model = 'SLS AMG';
      this.colors = {
        car: 'Серый',
        salon: 'Черный',
        wheels: 'Серый'
      };
      this.options = ['ABS', 'ESP', 'AutoParking'];

    } else {
      this.name = 'Jaguar ';
      this.speed = 330;
      this.volume = 'V6 5.2';
      this.hp = 495;
      this.model = 'F-Type Coupe';
      this.colors = {
        car: 'Оранжевый',
        salon: 'Черный',
        wheels: 'Серый'
      };
      this.options = ['ABS', 'ESP', 'ESR', 'AutoParking'];
    }
  }
}

interface Colors {
  car: string,
  salon: string,
  wheels: string
}
