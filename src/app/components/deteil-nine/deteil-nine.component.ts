import { Component } from '@angular/core';

@Component({
  selector: 'app-deteil-nine',
  template: `
    <button class="btn btn-outline-danger back" routerLink="/catalog" >Назад </button>
    <div class="col-wrapper">
      <div class="col col-670">
        <div class="container">
          <br>
          <h4><strong>Автомобиль</strong>: {{name}}
            <small>{{model}}</small></h4>
          <div class="alert alert-primary">
            <h4><p class="text-center">Характеристики автомобиля:</p></h4>
            <ul>
              <h5>
                <li>Скорость: <strong>{{speed}}</strong> км/ч</li>
                <li>Объем двигателя: <strong>{{volume}}</strong> л.</li>
                <li>Лошадинные силы: <strong>{{hp}}</strong> л.с.</li>
                <li>Цвет авто: <strong>{{colors.car}}</strong></li>
                <li>Цвет салона: <strong>{{colors.salon}}</strong></li>
                <li>Цвет колес: <strong>{{colors.wheels}}</strong></li>
              </h5>
            </ul>
            <h5><p>Мы абсолютно не ожидали от этого автомобиля ничего.
              Но когда он был выпущен, мы не были разочарованы.
              Двигатель V6 и 380 лошадиных сил, которые могут увеличиться до 495, если ты приобретешь спорт-версию модели.</p></h5>
          </div>


          <button class="btn btn-outline-danger" (click)="showEdit()">Редактировать </button>
          <div><br></div>
          <form *ngIf="isEdit">
            <h5>Редактирование объекта</h5>
            <div class="form-group">
              <input type="text" placeholder="Марка авто" class="form-control" [(ngModel)]="name" name="name"><br>
              <input type="text" placeholder="Модель авто" class="form-control" [(ngModel)]="model" name="model"><br>
              <input type="text" placeholder="Объем двигателя" class="form-control" [(ngModel)]="volume" name="volume"><br>
              <input type="number" placeholder="Лошадинные силы" class="form-control" [(ngModel)]="hp" name="hp"><br>
              <input type="number" placeholder="Скорость" class="form-control" [(ngModel)]="speed" name="speed"><br>
              <input type="text" placeholder="Цвет авто" class="form-control" [(ngModel)]="colors.car" name="car"><br>
              <input type="text" placeholder="Цвет салона" class="form-control" [(ngModel)]="colors.salon" name="salon"><br>
              <input type="text" placeholder="Цвет колес" class="form-control" [(ngModel)]="colors.wheels" name="wheels"><br>
            </div>
          </form>

          <h4>Дополнительные системы:</h4>
          <form *ngIf="isEdit">
            <form (submit)="addOpt(option.value)">
              <div class="form-group">
                <label for="option"> Добавление новой системы </label><br>
                <input type="text" id="option" placeholder="Введите текст" class="form-control" #option>
                <br>
                <button type="submit" class="btn btn-outline-success">Добавить</button><br>
              </div><br>
            </form>
          </form>

          <h5>
            <div class="alert alert-success">
              <ul>
                <li *ngFor="let opt of options">
                  {{opt}} <button class="btn btn-warning btn-sm" (click)="deleteOpt(opt)">x</button>
                </li>
              </ul>
            </div>
          </h5>
        </div>

      </div>
      <div class="col col-250">
        <img class="pict" src="https://i.pinimg.com/originals/23/54/6d/23546dffbfb100d6b195a2f7b00df343.jpg">
      </div>
    </div>

  `,
  styleUrls: ['./deteil-nine.component.css']
})
export class DeteilNineComponent {
  name: string | undefined;
  speed: number | undefined;
  volume:string | undefined;
  hp: number | undefined;
  model: string | undefined;
  colors: Colors | any;
  options: string[] | any;
  isEdit: boolean = false;


  constructor() { }

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
  ngOnInit() {
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

interface Colors {
  car: string,
  salon: string,
  wheels: string
}
