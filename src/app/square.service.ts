import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Square } from './square.model';

@Injectable()
export class SquareService {
  squares: FirebaseListObservable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.squares = database.list('squares');
  }

  getSquares() {
    // this.database.database().ref('/posts').on('value', function(snapshot) {
    //   console.log(snapshot.val());
    // });
    return this.squares;
  }

  getSquareById(id: string) {
    return this.database.object('squares/' + id);
  }

}
