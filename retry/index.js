//Rxjs 5
// import Rx from 'rxjs';
//
// const buggyAPI = Rx.Observable
// .timer(1000)
// .do(a=>console.log("You called the buggy API!"))
// .do(a=>{throw new Error()});
//
// buggyAPI
// // .retry(3)
// .retryWhen(()=>Rx.Observable.interval(1000))
// .subscribe(a=>console.log(a))

//Rxjs 6
import {timer, interval} from 'rxjs';
import {tap, retry, retryWhen} from 'rxjs/operators';

const buggyAPI = timer(1000).pipe(
  tap(a=>console.log('You called the buggy API!')),
  tap(a=> {throw new Error()})
);

buggyAPI.pipe(
  //retry(3)
  retryWhen(() => interval(1000))
)
.subscribe(a=>console.log(a));