// Rxjs 5
// import Rx from 'rxjs';
// const range = Rx.Observable.interval(100),take(100);

// range .do(v=> console.log("Value::", v))
// .map(n=>n*2)
// .every(n=> n % 2 === 0)
// .subscribe(b=> console.log(b));

// Rxjs 6
import {range, interval} from 'rxjs';
import {map, every, tap, take} from 'rxjs/operators';

const rangeObserverable = interval(100).pipe(take(100));

rangeObserverable
  .pipe(
    map(n=>n*2),
    tap(v => console.log('Value::', v)),
    every(n => n % 2 === 0)
  )
  .subscribe(b=>console.log(b));
