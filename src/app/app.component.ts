import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { PaymentHistoryComponent } from "./payment-history/payment-history.component";
import { RequestsComponent } from "./requests/requests.component";
import { TrainingsComponent } from './trainings/trainings.component';
import { DebtsComponent } from "./debts/debts.component";

@Component({
  selector: 'app-root',
  imports: [CounterComponent, SidebarComponent, HeaderComponent, PaymentHistoryComponent, RequestsComponent, TrainingsComponent, DebtsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit, AfterViewInit{

  title = 'My first course 1';
  description = 'I enjoy to learn Angular';

  constructor(){
    console.log('I am constructor');
  }

  ngOnInit(): void {
  console.log('ngOnInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }


  changeTitle(){
    this.title = 'My first course 2'
  }

  changeTitle2(){
    this.title = 'My first course 3'
  }

  descriptionUpdate(){
    this.description = 'Description Updated'
  }

  vog(){
    this.description = 'Really??? Who the hell does?'
  }

  originalDescription(){
    this.description= 'I enjoy to learn Angular'
  
  }
}
