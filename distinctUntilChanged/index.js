// Rxjs 5
// import Rx from 'rxjs';
// Rx.Observable
// .interval(100)
// .map(n => ~~(n/10)),
// .distinctUntilChanged()
// .subscribe( a=> console.log(a))

// Rxjs 6
import {interval} from 'rxjs';
import {map, distinctUntilChanged} from 'rxjs/operators';

interval(100)
  .pipe(
    map(n => ~~(n/10)),
    distinctUntilChanged()
  )
  .subscribe( a=> console.log(a));