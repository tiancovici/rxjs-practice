// Rxjs 5
// import Rx from 'rxjs';

// Rx.Observable
////range(1, 9)
// .interval(100)
//// .take(5)
//// .takeWhile( a=> a<7)
// .takeUntil(timer(2000))
// .subscribe(a=>console.log(a));

// Rxjs 6
import {range, interval, timer} from 'rxjs';
import {take, takeWhile, takeUntil} from 'rxjs/operators';

//range(1, 9)
interval(100)
  .pipe(
    // take(5)
    //takeWhile( a=> a<7)
    takeUntil(timer(2000))
  )
  .subscribe(a=>console.log(a));

