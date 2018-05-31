// Rxjs 5
// import Rx from 'rxjs';
// Rx.Observable
// .empty()
// .defaultIfEmpty(42)
// .subscribe(a=>console.log('Where\'s the value???', a));

// Rxjs 6
import {EMPTY} from 'rxjs';
import {defaultIfEmpty} from 'rxjs/operators';

EMPTY
.pipe(
  defaultIfEmpty(42)
)
.subscribe(a=>console.log('Where\'s the value???', a));


