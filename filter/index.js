// Rxjs 5
// import Rx from 'rxjs';
// const range = Rx.Observable
//  .interval(400)
//  .filter(n=> n % 2 != 0)
//  .subscribe(a=> console.log(a));

// Rxjs 6
import {range, interval} from 'rxjs';
import {filter} from 'rxjs/operators';

const rangeObservable = interval(400)
  .pipe(filter(n=> n % 2 != 0))
  .subscribe(a=> console.log(a));

