//Rxjs 5
// import Rx from 'rxjs';
// import { fromStdIn } from '../utility';
//
// Rx.Observable.of(
// Rx.Observable.range(1,3),
// Rx.Observable.interval(100).take(10),
// fromStdIn()
// )
// .concatAll()
// .subscribe(a=>console.log(a))


// Rxjs 6

import {range, interval, of} from 'rxjs';
import {take, concatAll} from 'rxjs/operators';
import {fromStdIn} from '../utility';
of(
  range(1,3),
  interval(100).pipe(
    take(10)
  ),
  fromStdIn(),

).pipe(
  concatAll()
)
.subscribe( a=> console.log(a));