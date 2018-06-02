//Rxjs 5
// import Rx from 'rxjs';
//
// Rx.Observable
// .range(1,20)
// .groupBy(n=>n % 3)
// .mergeMap(nGroup=>nGroup.toArray())
// .subscribe(a=>console.log(a));


//Rxjs 6
import {range, from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';

range(1, 20).pipe(
  groupBy(n => n % 3),
  mergeMap(nGroup => nGroup.pipe(toArray()))
)
.subscribe(a => console.log(a));


const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 }
];

from(people).pipe(
  groupBy(person => person.age),
  mergeMap(group => group.pipe(toArray()))
)
.subscribe(a => console.log(a));