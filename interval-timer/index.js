// Rxjs 5
// import Rx from 'rxjs';
// const ticker = Rx.Observable.interval(2000);
// const stopWatch = Rx.Observable.timer(2000, 1000);
// stopWatch.subscribe( a => console.log("A", a));

// Rxjs 6
import {interval, timer} from 'rxjs';
const ticker = interval(2000);
const stopWatch = timer(2000, 1000);
stopWatch.subscribe( a => console.log("A", a));
