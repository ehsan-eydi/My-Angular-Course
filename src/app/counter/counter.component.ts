import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  count = 10;
  showFirstExplosion = false;
  showSecondExplosion = false;
  showSmile = false;
 

    ngOnInit() {
      const interval = setInterval(() => {
        if (this.count > 0) {
          this.count--;
        } else {
          clearInterval(interval); // Stop when count reaches 10
          this.showFirstExplosion = true; // Show explosion when done

          setTimeout(() => {
            this.showFirstExplosion = false; // Hide explosion after 6s
            this.showSecondExplosion = true;

            setTimeout(() => {
              this.showSecondExplosion = false;
              this.showSmile = true;

              setTimeout(() => {
                this.showSmile = false;
              }, 4000)
            }, 2500)
          }, 6000);
        }
      }, 1000);
    }
    //this.startCounting();

/*   startCounting() {
    this.intervalId = setInterval(() => {
      if (this.count > 0) {
        this.count--;
      } else {
        clearInterval(this.intervalId); // Stop when count reaches 10
      }
    }, 1000); // 1 second interval
  } */
}
