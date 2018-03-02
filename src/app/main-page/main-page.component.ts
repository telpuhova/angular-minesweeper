import { Component, OnInit } from '@angular/core';
import { SQUARES } from '../mock-squares2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SquareService } from '../square.service';

// import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
declare var $: any;

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
  openedSquares = 0;


  constructor(private squareService: SquareService) { }

  ngOnInit() {
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
    this.openedSquares = 0;
  }

  clickSquare(clickedSquare) {
    $("#" + clickedSquare.$key).show();
    if (clickedSquare.value === "*") {
      // alert("you're lost");
      $("#default").hide();
      $("#lost").show();
      $(".square-value").show();
      // this.start = false;
    }
    this.openedSquares++;
    if (this.openedSquares > 53) {
      // alert("you won");
      $(".square-value").show();
      $("#default").hide();
      $("#won").show();
    }

  }

  newGameClick() {
    this.start = true;
    this.openedSquares = 0;
    $(".square-value").hide();
    $("#lost").hide();
    $("#won").hide();
    $("#default").show();
  }

}
