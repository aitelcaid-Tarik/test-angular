import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { CarService } from './carservice';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CarService]
})

export class AppModule { }
