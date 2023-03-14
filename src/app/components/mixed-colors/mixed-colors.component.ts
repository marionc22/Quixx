import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixed-colors',
  templateUrl: './mixed-colors.component.html',
  styleUrls: ['./mixed-colors.component.css'],
})
export class MixedColorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  grid = [
    [
      {id:1, color: 'yellow', number: 2 },
      {id:2, color: 'yellow', number: 3 },
      {id:3, color: 'yellow', number: 4 },
      {id:4, color: 'blue', number: 5 },
      {id:5, color: 'blue', number: 6 },
      {id:6, color: 'blue', number: 7 },
      {id:7, color: 'green', number: 8 },
      {id:8, color: 'green', number: 9 },
      {id:9, color: 'green', number: 10 },
      {id:10, color: 'red', number: 11 },
      {id:11, color: 'red', number: 12 },
    ],
    [
      {id:12, color: 'red', number: 2 },
      {id:13, color: 'red', number: 3 },
      {id:14, color: 'green', number: 4 },
      {id:15, color: 'green', number: 5 },
      {id:16, color: 'green', number: 6 },
      {id:17, color: 'green', number: 7 },
      {id:18, color: 'blue', number: 8 },
      {id:19, color: 'blue', number: 9 },
      {id:20, color: 'yellow', number: 10 },
      {id:21, color: 'yellow', number: 11 },
      {id:22, color: 'yellow', number: 12 },
    ],
    [
      {id:23, color: 'blue', number: 12 },
      {id:24, color: 'blue', number: 11 },
      {id:25, color: 'blue', number: 10 },
      {id:26, color: 'yellow', number: 9 },
      {id:27, color: 'yellow', number: 8 },
      {id:28, color: 'yellow', number: 7 },
      {id:29, color: 'red', number: 6 },
      {id:30, color: 'red', number: 5 },
      {id:31, color: 'red', number: 4 },
      {id:32, color: 'green', number: 3 },
      {id:33, color: 'green', number: 2 },
    ],

    [
      {id:34, color: 'green', number: 12 },
      {id:35, color: 'green', number: 11 },
      {id:36, color: 'red', number: 10 },
      {id:37, color: 'red', number: 9 },
      {id:38, color: 'red', number: 8 },
      {id:39, color: 'red', number: 7 },
      {id:40, color: 'yellow', number:6 },
      {id:41, color: 'yellow', number: 5 },
      {id:42, color: 'blue', number: 4 },
      {id:44, color: 'blue', number: 3 },
      {id:43, color: 'blue', number: 2 },
    ],
  ];



  crossedNumbers: (string|number)[] = [];
linesClosed: string[]= []

  totalRed = 0;
  totalGreen = 0;
  totalBlue = 0;
  totalYellow = 0;

  totalPoints =
    this.totalRed + this.totalBlue + this.totalGreen + this.totalYellow;

  totalMalus = 0;

  displayTotal = false;

  points = [
    { numberOfCross: 1, points: 1 },
    { numberOfCross: 2, points: 3 },
    { numberOfCross: 3, points: 6 },
    { numberOfCross: 4, points: 10 },
    { numberOfCross: 5, points: 15 },
    { numberOfCross: 6, points: 21 },
    { numberOfCross: 7, points: 28 },
    { numberOfCross: 8, points: 36 },
    { numberOfCross: 9, points: 45 },
    { numberOfCross: 10, points: 55 },
    { numberOfCross: 11, points: 66 },
    { numberOfCross: 12, points: 78 },
  ];

  addCross(id: number, color: string) {
    if (this.linesClosed.indexOf(color) < 0) {
      if (this.crossedNumbers.indexOf(id) < 0) {
        this.crossedNumbers.push(id)
        this.crossedNumbers.push(color);
 
      } else {
        this.crossedNumbers.splice(this.crossedNumbers.indexOf(id));
      }
    }
  }

closeLine(color:string){
  if (this.linesClosed.indexOf(color) < 0) {
this.linesClosed.push(color)
  }
 else {
  this.linesClosed.splice(this.linesClosed.indexOf(color));
 }
}
 
  addMalus(event: any) {
    if (event.target.checked == true) {
      this.totalMalus += 5;
    } else {
      this.totalMalus -= 5;
    }
  }

  countTotalRed() {
    let numberOfCross = 0
    numberOfCross = this.crossedNumbers.filter((currentElement) => currentElement === 'red').length;
        this.points.map((elem) => {
          if (elem.numberOfCross === numberOfCross) {
            this.totalRed = elem.points;
          }
        });
      }

  countTotalYellow() {
    let numberOfCross = 0
    numberOfCross = this.crossedNumbers.filter((currentElement) => currentElement === 'yellow').length;
        this.points.map((elem) => {
          if (elem.numberOfCross === numberOfCross) {
            this.totalYellow = elem.points;
          }
        });
      }

  countTotalGreen() {
let numberOfCross = 0
numberOfCross = this.crossedNumbers.filter((currentElement) => currentElement === 'green').length;
    this.points.map((elem) => {
      if (elem.numberOfCross === numberOfCross) {
        this.totalGreen = elem.points;
      }
    });
  }

  countTotalBlue() {
    let numberOfCross = 0
    numberOfCross = this.crossedNumbers.filter((currentElement) => currentElement === 'blue').length;
        this.points.map((elem) => {
          if (elem.numberOfCross === numberOfCross) {
            this.totalBlue = elem.points;
          }
        });
      console.log(this.totalBlue)
             }
  

  getTotal() {
    this.countTotalBlue();
    this.countTotalGreen();
    this.countTotalRed();
    this.countTotalYellow();
    this.totalPoints =
      this.totalRed +
      this.totalBlue +
      this.totalGreen +
      this.totalYellow -
      this.totalMalus;
    this.displayTotal = true;
  }
}
