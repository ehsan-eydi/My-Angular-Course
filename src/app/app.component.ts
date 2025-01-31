import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
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
