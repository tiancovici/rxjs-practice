// Rxjs 5

// import Rx from 'rxjs';
//
// const apiA =Rx.Observable
// .timer(1500,100)
// .map(n=>`API A => ${n}`);
//
// const apiB = Rx.Observable
// .timer(2000,100)
// .map(n=>`API B => ${n}`);
//
// Rx.Observable.race(
// apiA,
// apiB
// )
// .subscribe(a=>console.log(a));

// Rxjs 6
import {timer, race} from 'rxjs';
import {map} from 'rxjs/operators';

const apiA = timer(1500, 100).pipe(map(n => `API A => ${n}`));
const apiB = timer(2000, 100).pipe(map(n => `API B => ${n}`));

race(apiA, apiB)
.subscribe(a=>console.log(a));
