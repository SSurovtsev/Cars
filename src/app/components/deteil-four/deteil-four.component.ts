import { Component } from '@angular/core';

@Component({
  selector: 'app-deteil-four',
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
            <h5><p>Вот что происходит, когда крутой суперкар построен правильно с первого раза.
              1200 лошадиных сил, 8-литровый силовой двигатель, который может разогнать машину до 434 км/ч. Что с этой машиной будет дальше?
              Мы можем только надеяться, что будущее у неё блестящее, как и она сама.</p></h5>
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
        <img class="pict" src="https://stk-briket.ru/wp-content/uploads/6/6/3/66307a50a4927dc4fd5ed04f50074f61.jpeg">
      </div>
    </div>

  `,
  styleUrls: ['./deteil-four.component.css']
})
export class DeteilFourComponent {
  name: string | undefined;
  speed: number | undefined;
  volume:string | undefined;
  hp: number | undefined;
  model: string | undefined;
  colors: Colors | any;
  options: string[] | any;
  isEdit: boolean = false;
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
  }
}

interface Colors {
  car: string,
  salon: string,
  wheels: string
}
