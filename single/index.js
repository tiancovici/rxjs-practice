// Rxjs 5
// import Rx from 'rxjs';
//
// Rx.Observable
// .range(0,3)
// .single(n=>n % 2 == 0)
// .subscribe(a=>console.log(a));

// Rxjs 6
import {range} from 'rxjs';
import {single} from 'rxjs/operators';

range(0,3).pipe(
  single( n => n % 2 == 0)
)
.subscribe( a => console.log(a));
