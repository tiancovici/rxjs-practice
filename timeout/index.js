//Rxjs 5
// import Rx from 'rxjs';
// import { fromStdIn } from '../utility'
//
// console.log("Please INPUT your password QUICKLY!!");
//
// fromStdIn()
// .take(10)
// .timeout(2000)
// .subscribe(a=>console.log(a));

//Rxjs 6
import {timeout, take} from 'rxjs/operators';
import {fromStdIn} from '../utility';

console.log('Please input your password quickly!')

fromStdIn().pipe(
  take(10),
  timeout(2000)
)
.subscribe(a => console.log(a));