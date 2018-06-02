//Rxjs 5
// import Rx from 'rxjs';
//
// const [even,odds] = Rx.Observable
// .range(1,20)
// .partition(n=>n % 2 == 0);
// //.subscribe(a=>console.log(a));
//
// even.subscribe(a=>console.log("EVEN:",a));
// odds
// .map(n=>`ODD: ${n}`)
// .subscribe(a=>console.log(a));

//Rxjs 6
import {range} from 'rxjs';
import {filter, partition,map} from 'rxjs/operators';

const [even, odds] = range(1,20).pipe(
  partition(n => n % 2 === 0)
);


even.subscribe( a => console.log(`Even: ${a}`));
odds.pipe(
  map( a => `Odd: ${a}`)
)
.subscribe( a => console.log(a));

