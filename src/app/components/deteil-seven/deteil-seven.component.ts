import { Component } from '@angular/core';

@Component({
  selector: 'app-deteil-seven',
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
            <h5><p>Жирные V-10 и респектабельный вид.
              602 лошадиные силы – это мощно.
              И от нуля до ста за 2,5 секунды – вполне в духе быстрых и дерзких итальянцев.
              Lamborghini, как всегда, на высоте.
              325 километров в час – это круто.</p></h5>
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
        <img class="pict" src="https://www.digitaltrends.com/wp-content/uploads/2015/12/Lamborghini-Huracán-LP-610-4_068.jpg?p=1">
      </div>
    </div>
  `,
  styleUrls: ['./deteil-seven.component.css']
})
export class DeteilSevenComponent {
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
    this.name = 'Lamborghini ';
    this.volume = 'V10 4.2';
    this.hp = 602;
    this.speed = 380;
    this.model = 'Huracan ';
    this.colors = {
      car: 'Красный',
      salon: 'Черный',
      wheels: 'Черный'
    };
    this.options = ['ABS', 'ESP', 'AutoParking'];
  }
}

interface Colors {
  car: string,
  salon: string,
  wheels: string
}
