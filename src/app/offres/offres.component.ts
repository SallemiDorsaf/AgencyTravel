import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  timeLeft: number = 60;
  timeLef: number = 80;
  timeLe: number = 90;
  interval;
  constructor() { }

  ngOnInit() {
    this.fn1();
    this.fn2();
    this.fn3();
  }
  fn1() {
    return this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000) 
  }
  fn2() {
    return this.interval = setInterval(() => {
      if(this.timeLef > 0) {
        this.timeLef--;
      } else {
        this.timeLef = 80;
      }
    },1000) 
  }
  fn3() {
    return this.interval = setInterval(() => {
      if(this.timeLe > 0) {
        this.timeLe--;
      } else {
        this.timeLe = 90;
      }
    },1000) 
  }

}
