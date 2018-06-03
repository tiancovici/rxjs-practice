//Rxjs 5
// import Rx from 'rxjs';
// import { fromStdIn } from '../utility'
//
// Rx.Observable
// .interval(100)
// // .window(
// //     Rx.Observable.interval(1000)
// // )
// // .windowCount(10)
// // .windowTime(1000)
// // .windowToggle(
// //     fromStdIn().filter(key=>key==="p"),
// //     ()=>fromStdIn().filter(key=>key==="o"),
// // )
// .windowWhen(
// ()=>Rx.Observable.timer(1000)
// )
// .concatMap(a=>a.toArray())
// .subscribe(a=>console.log(a));

//Rxjs 6
import {interval, timer} from 'rxjs';
import {window, windowCount, windowTime, windowToggle, windowWhen, concatMap, toArray, filter} from 'rxjs/operators';
import {fromStdIn} from '../utility';

interval(100).pipe(
  // window(
  //   interval(1000)
  // ),
  //windowCount(10),
  //windowTime(1000),
  // windowToggle(
  //   fromStdIn().pipe(filter(key=>key==='p')),
  // () => fromStdIn().pipe(filter(key=>key==='o'))
  // ),
  windowWhen(
  () => timer(1000)
  ),
  concatMap(a=>a.pipe(toArray()))
)
.subscribe(a=>console.log(a));