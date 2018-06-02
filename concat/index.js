// import Rx from 'rxjs';
//
// Rx.Observable
// // .range(1,10)
// .interval(100)
// .take(20)
// .concat(
// Rx.Observable
// //  .range(1,20)
// .interval(100)
// .map(n=>"#2"+n)
// .skip(10)
// )
// .subscribe(a=>console.log(a));

import {range, interval} from 'rxjs';
import {concat, skip, take, map} from 'rxjs/operators';

// range(1,10)
// .pipe(
//   concat(
//     range(1, 20).pipe(skip(10))
//   ),
// )
// .subscribe(a => console.log(a));
interval(100).pipe(
  take(20),
  concat(
    interval(100).pipe(
      map(n => '#2' + n),
    //range(1, 20).pipe(
      skip(10)
    )
  ),
)
.subscribe(a => console.log(a));