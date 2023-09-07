import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { DetailsComponent } from './components/details/details.component';
import { DeteilTwoComponent } from './components/deteil-two/deteil-two.component';
import { DeteilThreeComponent } from './components/deteil-three/deteil-three.component';
import { DeteilFourComponent } from './components/deteil-four/deteil-four.component';
import { DeteilFiveComponent } from './components/deteil-five/deteil-five.component';
import { DeteilSixComponent } from './components/deteil-six/deteil-six.component';
import { DeteilSevenComponent } from './components/deteil-seven/deteil-seven.component';
import { DeteilEightComponent } from './components/deteil-eight/deteil-eight.component';
import { DeteilNineComponent } from './components/deteil-nine/deteil-nine.component';
import { ConnectorComponent } from './components/connector/connector.component';


const appRoutes: Routes = [
  //ПРОПИСЫВАЕМ АДРЕСА СТРАНИЦ, НА КОТОРЫЕ ПОТОМ НАЗНАЧИМ КНОПКИ
  {path: '', component:CarsComponent},
  {path: 'about', component:AboutComponent},
  {path: 'catalog', component:CatalogComponent},
  {path: 'detailsOne', component:DetailsComponent},
  {path: 'detailsTwo', component:DeteilTwoComponent},
  {path: 'detailsThree', component:DeteilThreeComponent},
  {path: 'detailsFour', component:DeteilFourComponent},
  {path: 'detailsFive', component:DeteilFiveComponent},
  {path: 'detailsSix', component:DeteilSixComponent},
  {path: 'detailsSeven', component:DeteilSevenComponent},
  {path: 'detailsEight', component:DeteilEightComponent},
  {path: 'detailsNine', component:DeteilNineComponent}




]

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AboutComponent,
    CatalogComponent,
    CarInfoComponent,
    DetailsComponent,
    DeteilTwoComponent,
    DeteilThreeComponent,
    DeteilFourComponent,
    DeteilFiveComponent,
    DeteilSixComponent,
    DeteilSevenComponent,
    DeteilEightComponent,
    DeteilNineComponent,
    ConnectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
