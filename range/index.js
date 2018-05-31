// Rxjs 5
// import Rx from 'rxjs';
// const rangeObservable = Rx.Observable.range(1, 16);

// RxJs 6
import {range} from 'rxjs';
const rangeObservable = range(1, 16);


// same
rangeObservable
  .subscribe(e=> console.log(`Range emitted ${e}`));