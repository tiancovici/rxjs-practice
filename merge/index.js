// Rxjs 5
// import Rx from 'rxjs';
//
// const bluePostFeed = Rx.Observable
// .interval(1000)
// .map(n=>`Blue Post Article #${n}`);
//
// const redHeraldFeed = Rx.Observable
// .interval(650)
// .map(n=>`Red Herald Article #${n}`);
//
// const greenTribuneFeed = Rx.Observable
// .interval(1650)
// .map(n=>`Green Tribune Article #${n}`);
//
// const config = {
//   blue:bluePostFeed,
//   red:redHeraldFeed,
//   green:greenTribuneFeed
// };
//
// const colors = ['blue','red','green'];
//
// Rx.Observable.from(colors)
// .mergeMap(color=>config[color])
// .subscribe(a=>console.log(a));
//
// // bluePostFeed
// //     .merge(
// //         redHeraldFeed
// //     )
// //     .subscribe(a=>console.log(a));
//
// // Rx.Observable.of(
// //     bluePostFeed,
// //     redHeraldFeed,
// //     greenTribuneFeed
// // ).mergeAll()
// // .subscribe(a=>console.log(a));


// Rxjs 6
import {interval, of, from} from 'rxjs';
import {map, merge, mergeAll, mergeMap} from 'rxjs/operators';

const bluePostFeed     = interval(1000).pipe(map(n => `Blue  Post Article #${n}`));
const redHeralFeed     = interval( 650).pipe(map(n => `Red   Post Article #${n}`));
const greenTribuneFeed = interval(1000).pipe(map(n => `Green Post Article #${n}`));

const config = {
  blue: bluePostFeed,
  red: redHeralFeed,
  green: greenTribuneFeed
};

const colors = ['blue', 'red', 'green'];

// bluePostFeed.pipe(
//   merge(redHeralFeed)
// )
// .subscribe(a=> console.log(a));

// of(bluePostFeed, redHeralFeed, greenTribuneFeed).pipe(
//   mergeAll()
// )
// .subscribe(a => console.log(a));
//

from(colors).pipe(
  mergeMap(color=> config[color])
)
.subscribe(a => console.log(a))