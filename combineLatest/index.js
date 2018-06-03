//Rxjs 5

// import Rx from 'rxjs';
//
// const countryObservable = Rx.Observable.fromEvent(
// document.getElementById('country'),
// "change",
// e=>e.target.value
// );
//
// const cityObservable = Rx.Observable.fromEvent(
// document.getElementById("city"),
// "change",
// e=>e.target.value
// );
//
// Rx.Observable.combineLatest(
// countryObservable,
// cityObservable
// )
// .subscribe(a=>console.log(a));

//Rxjs 6
import {fromEvent, combineLatest} from 'rxjs';

const countryObservable = fromEvent(
  document.getElementById('country'),
  "change",
  e => e.target.value
);

const cityObservable = fromEvent(
document.getElementById('city'),
"change",
e => e.target.value
);

combineLatest(countryObservable, cityObservable)
.subscribe(e => console.log(e));