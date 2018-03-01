import { Component, OnInit } from '@angular/core';
import { SQUARES } from '../mock-squares';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  start: boolean = true;
  squares = SQUARES;
  rows = this.splitIntoRows();

  constructor() { }

  ngOnInit() {
  }

  splitIntoRows() {
    let rows=[];
    let rowLength = Math.pow(this.squares.length, 0.5);
    for (let i=0; i<this.squares.length; i+=rowLength) {
      rows.push(this.squares.slice(i, i+rowLength));
    }
    return rows;
  }

  startGame() {
    this.start = true;

  }

  clickSquare(clickedSquare) {
    alert(clickedSquare.value);
  }

}
