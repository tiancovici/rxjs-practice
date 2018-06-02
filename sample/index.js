//Rxjs 5
// import Rx from 'rxjs';
// import { fromStdIn } from '../utility';
//
// fromStdIn()
// .sample(
// Rx.Observable.interval(1000)
// )
// .subscribe(a=>console.log(a));



//Rxjs 6
import {fromStdIn} from '../utility';
import {interval} from 'rxjs';
import {sample} from 'rxjs/operators';

fromStdIn().pipe(
  sample( interval(1000))
)
.subscribe((a) => console.log(a));

