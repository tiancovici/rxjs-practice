// Rxjs 5
// import Rx from 'rxjs';
// console.info("MADE API REQUEST");
// Rx.Observable
// .timer(2000, 500)
// .map(n=>n+1)
// .startWith(6)
// .subscribe(a=>console.log("REQUEST COMPELTE", a));

// Rxjs 6
import {timer} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

console.info("MADE API REQUEST");
timer(2000, 500)
.pipe(
  map(n=>n+1),
  startWith(0)
)
.subscribe(a=>console.log("REQUEST COMPELTE", a));