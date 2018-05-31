const fibonacciArray = [1, 1, 2, 3, 5, 8, 13, 32];

const fibonacciPromise = new Promise((resolve, reject) => resolve(fibonacciArray));

// Function generator
function * fibonacciGenerator() {
  let a = 1;
  let b = 1;
  while(true) {
    let c = a+b;
    yield c;
    a = b;
    b = c;
  }
};

// Rxjs 5
// import Rx from 'rxjs';
// Rx.Observable.from(fibonacciGenerator())


// Rxjs6
import {from} from 'rxjs'
import {take} from 'rxjs/operators'
// from(fibonacciPromise).subscribe(a => console.log(a));
from(fibonacciGenerator())
  .pipe(take(20))
  .subscribe(a=> console.log(a));