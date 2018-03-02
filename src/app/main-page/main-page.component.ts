import { Component, OnInit } from '@angular/core';
import { SQUARES } from '../mock-squares2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SquareService } from '../square.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [SquareService]
})
export class MainPageComponent implements OnInit {
  start: boolean = true;
  squares;
  rows;


  constructor(private squareService: SquareService) { }

  ngOnInit() {
    // this.squares = this.squareService.getSquares();
    // console.log(this.squares);


    this.squareService.getSquares().subscribe(dataLastEmittedFromObserver => {
      this.squares = dataLastEmittedFromObserver;
      console.log(this.squares)
      this.rows = this.splitIntoRows();
    })

  }

  splitIntoRows() {
    let rows=[];
    console.log("splitIntoRows: " + this.squares);
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
