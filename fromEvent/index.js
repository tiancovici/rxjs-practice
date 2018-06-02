//Rxjs 5
// import Rx from 'rxjs';
//
// Rx.Observable.fromEvent(document.forms[0],'submit')
// .do(()=>console.log("Prevent refresh"))
// .subscribe(e=>e.preventDefault());
//
// Rx.Observable.fromEvent(document.getElementById('animal'),'change')
// .map(event=>event.target.value)
// .subscribe(e=>console.log(e));
//
// Rx.Observable.fromEvent(document.getElementById('motto'), 'change')
// .map(e=>e.target.value)
// .subscribe(e=>console.log(e));


//Rxjs 6
import {fromEvent} from 'rxjs';
import {tap, map} from 'rxjs/operators';


fromEvent(document.forms[0], 'submit').pipe(
  tap(() => console.log('Prevent Refresh'))
)
.subscribe(e => e.preventDefault());

fromEvent(document.getElementById('animal'), 'change').pipe(
  map(event => event.target.value)
)
.subscribe(e => console.log(e));

fromEvent(document.getElementById('motto'), 'change').pipe(
  map(e=>e.target.value)
)
.subscribe(e => console.log(e));