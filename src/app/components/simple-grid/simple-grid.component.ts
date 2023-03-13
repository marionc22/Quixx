import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-grid',
  templateUrl: './simple-grid.component.html',
  styleUrls: ['./simple-grid.component.css'],
})
export class SimpleGridComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  redGrid = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  yellowGrid = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  greenGrid = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  blueGrid = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

  crossedRed: number[] = [];
  crossedYellow: number[] = [];
  crossedGreen: number[] = [];
  crossedBlue: number[] = [];

  redClosed = false;
  yellowClosed = false;
  greenClosed = false;
  blueClosed = false;

  totalRed = 0;
  totalGreen = 0;
  totalBlue = 0;
  totalYellow = 0;

  totalPoints =
    this.totalRed + this.totalBlue + this.totalGreen + this.totalYellow;

  totalMalus = 0;

  displayTotal= false;

  addRed(number: number) {
    if (this.redClosed === false) {
      if (this.crossedRed.indexOf(number) < 0) {
        this.crossedRed.push(number);
      } else {
        this.crossedRed.splice(this.crossedRed.indexOf(number));
      }
      if (number === 13) {
        this.redClosed = true;
      }
    } else if (number === 13 && this.redClosed === true) {
      this.crossedRed.splice(this.crossedRed.indexOf(number));
      this.redClosed = false;
    }

    this.countTotalRed();
  }

  addYellow(number: number) {
    if (this.yellowClosed === false) {
      if (this.crossedYellow.indexOf(number) < 0) {
        this.crossedYellow.push(number);
      } else {
        this.crossedYellow.splice(this.crossedYellow.indexOf(number));
      }
      if (number === 13) {
        this.yellowClosed = true;
      }
    } else if (number === 13 && this.yellowClosed === true) {
      this.crossedYellow.splice(this.crossedYellow.indexOf(number));
      this.yellowClosed = false;
    }
    this.countTotalYellow();
  }

  addGreen(number: number) {
    if (this.greenClosed === false) {
      if (this.crossedGreen.indexOf(number) < 0) {
        this.crossedGreen.push(number);
      } else {
        this.crossedGreen.splice(this.crossedGreen.indexOf(number));
      }
      if (number === 13) {
        this.greenClosed = true;
      }
    } else if (number === 13 && this.greenClosed === true) {
      this.crossedGreen.splice(this.crossedGreen.indexOf(number));
      this.greenClosed = false;
    }
    this.countTotalGreen();
  }

  addBlue(number: number) {
    if (this.blueClosed === false) {
      if (this.crossedBlue.indexOf(number) < 0) {
        this.crossedBlue.push(number);
      } else {
        this.crossedBlue.splice(this.crossedBlue.indexOf(number));
      }
      if (number === 13) {
        this.blueClosed = true;
      }
    } else if (number === 13 && this.blueClosed === true) {
      this.crossedBlue.splice(this.crossedBlue.indexOf(number));
      this.blueClosed = false;
    }
    this.countTotalBlue();
  }

  addMalus(event: any) {
    if (event.target.checked == true) {
      this.totalMalus += 5;
    } else {
      this.totalMalus -= 5;
    }
  }

  countTotalYellow() {
    this.totalYellow = 0;
    switch (this.crossedYellow.length) {
      case 1:
        this.totalYellow = 1;
        break;
      case 2:
        this.totalYellow = 3;
        break;
      case 3:
        this.totalYellow = 6;
        break;
      case 4:
        this.totalYellow = 10;
        break;
      case 5:
        this.totalYellow = 15;
        break;
      case 6:
        this.totalYellow = 21;
        break;
      case 7:
        this.totalYellow = 28;
        break;
      case 8:
        this.totalYellow = 36;
        break;
      case 9:
        this.totalYellow = 45;
        break;
      case 10:
        this.totalYellow = 55;
        break;
      case 11:
        this.totalYellow = 66;
        break;
      case 12:
        this.totalYellow = 78;
        break;
    }
  }

  countTotalGreen() {
    this.totalGreen = 0;
    switch (this.crossedGreen.length) {
      case 1:
        this.totalGreen = 1;
        break;
      case 2:
        this.totalGreen = 3;
        break;
      case 3:
        this.totalGreen = 6;
        break;
      case 4:
        this.totalGreen = 10;
        break;
      case 5:
        this.totalGreen = 15;
        break;
      case 6:
        this.totalGreen = 21;
        break;
      case 7:
        this.totalGreen = 28;
        break;
      case 8:
        this.totalGreen = 36;
        break;
      case 9:
        this.totalGreen = 45;
        break;
      case 10:
        this.totalGreen = 55;
        break;
      case 11:
        this.totalGreen = 66;
        break;
      case 12:
        this.totalGreen = 78;
        break;
    }
  }

  countTotalBlue() {
    this.totalBlue = 0;
    switch (this.crossedBlue.length) {
      case 1:
        this.totalBlue = 1;
        break;
      case 2:
        this.totalBlue = 3;
        break;
      case 3:
        this.totalBlue = 6;
        break;
      case 4:
        this.totalBlue = 10;
        break;
      case 5:
        this.totalBlue = 15;
        break;
      case 6:
        this.totalBlue = 21;
        break;
      case 7:
        this.totalBlue = 28;
        break;
      case 8:
        this.totalBlue = 36;
        break;
      case 9:
        this.totalBlue = 45;
        break;
      case 10:
        this.totalBlue = 55;
        break;
      case 11:
        this.totalBlue = 66;
        break;
      case 12:
        this.totalBlue = 78;
        break;
    }
  }

  countTotalRed() {
    this.totalRed = 0;
    switch (this.crossedRed.length) {
      case 1:
        this.totalRed = 1;
        break;
      case 2:
        this.totalRed = 3;
        break;
      case 3:
        this.totalRed = 6;
        break;
      case 4:
        this.totalRed = 10;
        break;
      case 5:
        this.totalRed = 15;
        break;
      case 6:
        this.totalRed = 21;
        break;
      case 7:
        this.totalRed = 28;
        break;
      case 8:
        this.totalRed = 36;
        break;
      case 9:
        this.totalRed = 45;
        break;
      case 10:
        this.totalRed = 55;
        break;
      case 11:
        this.totalRed = 66;
        break;
      case 12:
        this.totalRed = 78;
        break;
    }
  }

  getTotal() {
    this.totalPoints =
      this.totalRed +
      this.totalBlue +
      this.totalGreen +
      this.totalYellow -
      this.totalMalus;
  console.log(this.totalPoints)
this.displayTotal=true
  }
}
