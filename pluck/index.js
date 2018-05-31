// Rxjs 5
// import Rx from 'rxjs';
// const friendsAPI = Rx.Observable
//   .interval(1000)
//   .map(i => ({name: `Friend #${i}`, mutualFriends: i * 2 + 1}))
//   .pluck('mutualFriends')
//   .subscribe(a=>console.log(a));

// RxJs 6
import {interval} from 'rxjs';
import {map, pluck} from 'rxjs/operators';
const friendsAPI = interval(1000)
  .pipe(
    map(i => ({name: `Friend #${i}`, mutualFriends: i * 2 + 1})),
    pluck('mutualFriends')
    )
  .subscribe(a=>console.log(a));