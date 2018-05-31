// Rxjs 5
// import Rx from 'rxjs';
// const interval = Rx.Observable.interval(400);
// interval
//   .map(n=> n*n)
//   .do(n=> console.log('N after MAP#1::', n)),
//   .map(n=> n/3)
//   .do(n=> console.log('N after MAP#2::', n)),
//   .map(n=> n * n * n)
//   .do(n=> console.log('N after MAP#3::', n)),
//   .map(n=> n % 42)
//   .do(n=> console.log('N after MAP#4::', n)),
//   .subscribe(a=>console.log(a));

// RxJs 6
import {interval} from 'rxjs';
import {map, tap} from 'rxjs/operators';
const intervalObservable = interval(400);
intervalObservable
  .pipe(
    map(n=> n*n),
    tap(n=> console.log('N after MAP#1::', n)),
    map(n=> n/3),
    tap(n=> console.log('N after MAP#2::', n)),
    map(n=> n * n * n),
    tap(n=> console.log('N after MAP#3::', n)),
    map(n=> n % 42),
    tap(n=> console.log('N after MAP#4::', n))
  )
  .subscribe(a=>console.log(a));
