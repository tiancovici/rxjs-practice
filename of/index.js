// Rxjs 5
// import Rx from 'rxjs';
// Rx.Observable.of(1,2,3,'Four',[], {}, [1, 2, 3], 5)
//   .subscribe(a=>console.log(a));

// RxJs 6
import {of} from 'rxjs';
of(1,2,3, 'Four', [], {}, {}, [1, 2, 3] , 5)
  .subscribe(a => console.log(a));

