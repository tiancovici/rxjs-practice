//Rxjs 5
// import Rx from 'rxjs';
//
// const slowNumberObservable = Rx.Observable.interval(100);
// const slowSquareObservable = Rx.Observable.interval(350).map(n=>n*n);
//
// Rx.Observable.zip(
// slowNumberObservable,
// slowSquareObservable
// )
// .subscribe(a=>console.log(a));
// // slowNumberObservable.subscribe(a=>console.log(a));
// // slowSquareObservable.subscribe(a=>console.log(a));


//Rxjs 6
import {interval, zip} from 'rxjs';
import {map} from 'rxjs/operators';

const slowNumberObservables = interval(100);
const slowSquareObservable  = interval(350).pipe(map(n=> n*n));

zip(slowNumberObservables, slowSquareObservable)
.subscribe(a=> console.log(a));