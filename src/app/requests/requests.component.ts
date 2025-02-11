import { DatePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  imports: [NgClass, DatePipe],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})
export class RequestsComponent {

  students=[
    {
      name: "Michael Rodriguez",
      category: "B",
      transmission: "fa-car",
      date_ago: "2h ago",
      date: new Date("2024-08-24"),
      image: "https://i.pravatar.cc/400"
    },
    {
      name: "Alexander Margaret",
      category: "A1",
      transmission: "fa-car",
      date_ago: "5d ago",
      date: new Date("2024-07-24"),
      image: "https://i.pravatar.cc/500"
    },
    {
      name: "Elizabeth O'Sullivan",
      category: "C1",
      transmission: "fa-car",
      date_ago: "7d ago",
      date: new Date("2024-06-18"),
      image: "https://i.pravatar.cc/600"
    },
    {
      name: "Samantha Anderson",
      category: "B",
      transmission: "fa-car",
      date_ago: "10d ago",
      date: new Date("2024-06-01"),
      image: "https://i.pravatar.cc/700"
    },
  ]

}
