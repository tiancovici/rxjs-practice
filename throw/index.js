// Rxjs 5
// import Rx from 'rxjs';
// Rx.Observable
//   .throw()
//   .subscribe({
//     next: n => console.log('N value was emitted', n),
//     error: e => console.log('Entered error state!', e)
//   });

// RxJs 6
import {throwError} from 'rxjs';

throwError()
  .subscribe({
    next: n => console.log('N value was emitted', n),
    error: e => console.log('Entered error state!', e)
  });