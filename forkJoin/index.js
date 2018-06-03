
//Rxjs 5
// import Rx from 'rxjs';
//
// const friendAPI = Rx.Observable
// .timer(1000)
// .mapTo({name:"Hank"});
//
// const preferencesAPI = Rx.Observable
// .timer(1700)
// .mapTo(Rx.Observable.throw())
// .concatAll()
// // .mapTo({theme:"dark"});
//
// Rx.Observable.forkJoin(
// friendAPI,
// preferencesAPI
// )
// .subscribe(r=>console.log(r));

//Rxjs 6
import {timer, forkJoin, throwError} from 'rxjs';
import {mapTo, concatAll} from 'rxjs/operators';

const friendAPI = timer(1000).pipe(
  mapTo(throwError('error')),
  concatAll()
  // mapTo({name: 'Hank'})
);

const preferenceAPI = timer(1700).pipe(
  mapTo({theme: 'dark'})
);

forkJoin(
  friendAPI,
  preferenceAPI
)
.subscribe( r => console.log(r));

