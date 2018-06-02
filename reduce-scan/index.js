//Rxjs 5
// import Rx from 'rxjs';
//
// Rx.Observable
// .interval(200)
// .take(10)
// // .reduce((acc,value)=>acc+value,0)
// .scan((acc,value)=>acc+value,0)
// .subscribe(a=>console.log(a));

//Rxjs 6
import {interval} from 'rxjs';
import {reduce, take, scan} from 'rxjs/operators';

interval(200).pipe(
  take(10),
  // reduce((acc, value) => acc+value, 0)
  scan((acc, value) => acc+value, 0)
)
.subscribe(a=>console.log(a));