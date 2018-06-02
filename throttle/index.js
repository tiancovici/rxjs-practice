// Rxj 5
// import { fromStdIn } from '../utility'
//
// fromStdIn()
// .throttle(
// ()=>fromStdIn().filter(key=>key==="p")
// )
// // .throttleTime(1000)
// .subscribe(a=>console.log(a));

// Rxjs 6
import {fromStdIn} from '../utility';
import {throttle, throttleTime, filter} from 'rxjs/operators';

fromStdIn().pipe(
  // throttleTime(1000)
  throttle(
    () => fromStdIn().pipe(filter(key=> key==='p'))
  )
)
.subscribe(a => console.log(a));