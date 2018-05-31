// Rxjs 5
// import Rx from 'rxjs';

// Rx.Observable.of(
//   42
// )
// .do(() => console.log('What is the meaning of life, the universe, and everything?'))
// .delay(1200),
// .do(()=> console.log('Come on! You know this one!!')),
// .delay(2000)
// .subscribe(v=>console.log(v));

// console.log('STARTING!');
// range(1, 9)
// .delayWhen(n => Rx.Observable.timer(n*1000))
// .subscribe(n=>console.log(n));



// Rxjs 6
import {of, range, timer} from 'rxjs';
import {tap, delay, delayWhen} from 'rxjs/operators';

// of(42)
// .pipe(
//   tap(()=> console.log('What is the meaning of life, the universe, and everything?')),
//   delay(1200),
//   tap(()=> console.log('Come on! You know this one!!')),
//   delay(2000)
// )
// .subscribe(v=>console.log(v));

console.log('STARTING!');

range(1, 9)
  .pipe(delayWhen(n => timer(n*1000)))
  .subscribe(n=>console.log(n));
