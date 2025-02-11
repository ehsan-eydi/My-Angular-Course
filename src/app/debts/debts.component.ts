import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-debts',
  imports: [],
  templateUrl: './debts.component.html',
  styleUrl: './debts.component.scss'
})
export class DebtsComponent {

  student_debts=[

    {
      name: "Smith Murphy",
      category: "A1",
      number: "+44 20 7123 4567",
      status: "Terminated",
      debt: "12300",
      request: true,
      image: "https://i.pravatar.cc/100"
    },
    {
      name: "Taylor Davis",
      category: "B",
      number: "+44 20 8277 9999",
      status: "In Progress",
      debt: "7800",
      request: false,
      image: "https://i.pravatar.cc/200"
    },
    {
      name: "Evans Roy",
      category: "C1",
      number: "+44 20 8256 3216",
      status: "Completed",
      debt: "2000",
      request: true,
      image: "https://i.pravatar.cc/300"
    }

  ]

}
