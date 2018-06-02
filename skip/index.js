import {fromStdIn} from '../utility';
// Rxjs 5
//
// import Rx from 'rxjs';
//
// console.log("INPUT IS OFFICIALLY ACCEPTED IN 2X SECONDS");
//
// fromStdIn()
// // .skip(10)
// //.skipWhile(v=>v !== "g")
// .skipUntil(Rx.Observable.timer(2000))
// .subscribe(k=>console.log(k));


// Rxjs 6
import {timer} from 'rxjs';
import {skip, skipWhile, skipUntil, take} from 'rxjs/operators'

console.log("INPUT IS OFFICIALLY ACCEPTED IN 2X SECONDS");

fromStdIn()
  .pipe(
    //skip(10),
    //skipWhile( v => v !== 'g'),
    skipUntil(timer(2000)),
  )
  .subscribe(k => console.log(k));