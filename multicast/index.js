// Rxjs 5
// import Rx from 'rxjs';
//
// const shared = new Rx.BehaviorSubject(-1);
// const currencyTicker = Rx.Observable
// .interval(1000)
// .do(a=>console.log("PINGED API"))
// .map(n=>`Currency Info #${n} - [placeholder]`)
// // .share()
// // .publish()
// .multicast(shared)
//
// currencyTicker
// .subscribe(a=>console.log("LEFT WIDGET",a));
//
// currencyTicker
// .subscribe(a=>console.log("RIGHT WIDGET",a));
//
// currencyTicker.connect();

// Rxjs 6
import {interval, BehaviorSubject} from 'rxjs';
import {map, tap, publish, share, multicast} from 'rxjs/operators';

const shared = new BehaviorSubject(-1);
const currencyTicker = interval(1000).pipe(
  tap(a => console.log('PINGED API')),
  map(n => `Currency Info #${n} - [placeholder]`),
  //publish()
  //share()
multicast(shared)
);

currencyTicker
.subscribe(a => console.log('Left Widget', a));

currencyTicker
.subscribe(a => console.log('Right Widget', a));

//currencyTicker.connect();

currencyTicker.connect();