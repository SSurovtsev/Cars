import { Component, Input } from '@angular/core';
import { Carinfo} from "../../carinfo";

@Component({
  selector: 'app-car-info',
  template: `
    <section class="listing">
<!--      <img class="listing-photo" [src]="carinfo.photo" alt="Exterior photo of {{carinfo.name}}">-->
      <h2 class="listing-heading">{{ carinfo.name }} {{ carinfo.model}}</h2>
      <p class="listing-location">Объем двигателя:  {{carinfo.volume }} л.
        <br>Лощадинных сил:  {{carinfo.hp }} л.с.
        <br>Максимальная скорость:  {{carinfo.speed }} км/ч</p>
      <div class="link-line" [routerLink]="carinfo.address">Подробней</div>

<!--      <a class="nav-item nav-link nav_bar navigation_bar" routerLink="/about">Подробней</a>-->
    </section>
  `,
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent {
  @Input() carinfo!: Carinfo;
}
