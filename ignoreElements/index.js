// Rxjs 5
// import Rx from 'rxjs';
//
// console.log("interval's started!");
// Rx.Observable
// .interval(100)
// .take(20)
// .ignoreElements()
// .subscribe({
//   next:a=>console.log(a),
//   complete:a=>console.log("COMPLEEEETE!", a),
// });

//Rxjs 6
import {range, interval} from 'rxjs';
import {map, startWith, tap, take, ignoreElements} from 'rxjs/operators';

console.log("Interval Started")
//range(1,10).pipe(
interval(100).pipe(
  take(20),
  ignoreElements(),
)
.subscribe({
  next: a => console.log(a),
  complete: a=> console.log("COMPLETE!", a)
});