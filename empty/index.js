
// Rxjs5
// import Rx from 'rxjs'
// Rx.Observable.empty().subscribe({
//      complete: a=> console.log("COMPLEEEEEAATT", a),
//      next: => console.log('EMITTT', a)
// });

// Rxjs6
import {EMPTY} from 'rxjs';

EMPTY.subscribe({
  complete: a => console.log("COMPLEEEEEAATT", a),
  next: a => console.log('EMITTT', a)
});