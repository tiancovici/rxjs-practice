
//Rxjs 6
import {fromStdIn} from '../utility';
import {interval} from 'rxjs';
import {withLatestFrom} from 'rxjs/operators';

interval(1000).pipe(
  withLatestFrom(fromStdIn())
)
.subscribe(a=>console.log(a));