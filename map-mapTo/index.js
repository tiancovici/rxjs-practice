// Rxjs 5
// import Rx from 'rxjs';
// const range = Rx.Observable.range(1,9);
//
// range
//   .map(n=> n * n)
//   .subscribe(a=>console.log(a));
//
// const notificationAPI = interval(1000);
// notificationAPI
//  .mapTo({type: 'NOTIFICATION_ARRIVED'})
//  .subscribe(a=>console.log(a));


// Rxjs 6
import {range, interval} from 'rxjs';
import {map, mapTo} from 'rxjs/operators';
const rangeObservable = range(1, 9);

rangeObservable
  .pipe(map(n=> n * n))
  .subscribe(a => console.log(a));

const notificationAPI = interval(1000);
notificationAPI
  .pipe(mapTo({type: 'NOTIFICATION_ARRIVED'}))
  .subscribe(a=>console.log(a));