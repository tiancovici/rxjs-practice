// Rxjs 5
// import Rx from 'rxjs';
// const customObservable = Rx.Observable.create(observer=> {
//   observer.next(42);
//
//   setInterval(()=> {
//    observer.next("FLOON!!");
//   }, 500);
//
//   setTimeout(()=> {
//     observer.complete();
//   }, 2500);
// })
// customObservable
//   .subscribe({
//     next: a => console.log('Next!', a)
// complete: b=> console.log('Complete', b)
//   });

// Rxjs 6
import {Observable} from 'rxjs';

const customObservable = Observable.create(observer => {
  observer.next(42);

  setInterval(()=> {
   observer.next("FLOON!!");
  }, 500);

  setTimeout(()=> {
    observer.complete();
  }, 2500);
});

customObservable.subscribe({
  next: a=> console.log('Next!', a),
  complete: b=> console.log('Complete', b)
});