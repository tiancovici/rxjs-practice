// Rxjs 5
// import Rx from 'rxjs';
//
// Rx.Observable
// .interval(100)
// .concatMapTo(Rx.Observable.range(0,10))
// // .concatMap(n=>Rx.Observable.range(0,n+1))
// .subscribe(a=>console.log(a));


// Rxjs 6
import {interval, range} from 'rxjs';
import {concatMap, map } from 'rxjs/operators';

interval(100).pipe(
  // map(n=> `Range #${n}`)
  concatMap(n => range(0, n+1 ))
)
.subscribe(a=> console.log(a));