import { Component, OnInit } from '@angular/core';
import { CarService } from './carservice';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
        :host ::ng-deep .p-datatable tr th {
            position: -webkit-sticky;
            position: sticky;
            top: 69px;
        }
`]
})
export class AppComponent implements OnInit {
  
  cars: Car[] = [];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

}