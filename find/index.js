// Rxjs 5
// import Rx from 'rxjs';
// Rx.Observable.interval(100)
// .first()
// .subscribe(a => console.log(a));

// Rxjs 6
import {interval} from 'rxjs';
import {first} from 'rxjs/operators';

interval(100)
  .pipe(
    first(n=> n===3)
  )
  .subscribe(a=> console.log(a));