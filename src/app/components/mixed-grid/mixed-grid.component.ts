import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixed-grid',
  templateUrl: './mixed-grid.component.html',
  styleUrls: ['./mixed-grid.component.css'],
})
export class MixedGridComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  redGrid = [10, 6, 2, 8, 3, 4, 12, 5, 9, 7, 11];
  yellowGrid = [9, 12, 4, 6, 7, 2, 5, 8, 11, 3, 10];
  greenGrid = [8, 2, 10, 12, 6, 9, 7, 4, 5, 11, 3];
  blueGrid = [5, 7, 11, 9, 12, 3, 8, 10, 2, 6, 4];

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
    this.points.map((elem) => {
      if (elem.numberOfCross === this.crossedYellow.length + 1) {
        this.totalYellow = elem.points;
      }
    });
  }

  countTotalGreen() {
    this.points.map((elem) => {
      if (elem.numberOfCross === this.crossedGreen.length + 1) {
        this.totalGreen = elem.points;
      }
    });
  }

  countTotalBlue() {
    this.points.map((elem) => {
      if (elem.numberOfCross === this.crossedBlue.length + 1) {
        this.totalBlue = elem.points;
      }
    });
  }

  countTotalRed() {
    this.points.map((elem) => {
      if (elem.numberOfCross === this.crossedRed.length + 1) {
        this.totalRed = elem.points;
      }
    });
  }

  getTotal() {
    this.totalPoints =
      this.totalRed +
      this.totalBlue +
      this.totalGreen +
      this.totalYellow -
      this.totalMalus;
    this.displayTotal = true;
  }
}
