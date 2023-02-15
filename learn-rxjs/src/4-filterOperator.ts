/**
 * filter
 * https://rxjs.tech/api/operators/filter
 * 类似于众所周知的 Array.prototype.filter 方法，该操作符会从源 Observable 获取值，将它们传给 predicate 函数，并且只发送那些计算结果为 true 的值。
 */
/*import { filter, of } from "rxjs";

let numberObservable = of(1, 2, 5, 78, 5, 4).pipe(filter(x => x % 2 === 0));
numberObservable.subscribe(value => {
    console.log(value);
})*/

// *******************************************************************************

/**
 * take
 * https://rxjs.tech/api/operators/take
 * 一个返回 Observable 的函数，它只会发送源 Observable 发送的前 count 个值，或者如果源发出的值少于 count 个，则返回来自源的所有值。
 */
/*import { interval, take } from "rxjs";
let numberObservable = interval(1000).pipe(take(5));
numberObservable.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete');
    }
});*/

// *******************************************************************************

/**
 * first
 * https://rxjs.tech/api/operators/first
 * 如果不带参数调用，first 就会发送源 Observable 的第一个值，然后完成。如果调用时带有 predicate 函数，则 first 会发送与指定条件匹配的源的第一个值。如果未提供 defaultValue 且未找到匹配元素，则会引发错误
 */
/*import { first, interval } from "rxjs";
let observable = interval(1000).pipe(first());
observable.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete');
    }
});
let observable1 = interval(1000).pipe(first(x => x % 2 !== 0));
observable1.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete');
    }
})*/

// *******************************************************************************

/**
 * takeUntil
 * https://rxjs.tech/api/index/function/takeUntil
 * takeUntil 会订阅并开始镜像源 Observable。它还会监视你提供的第二个 Observable notifier。如果此 notifier 发出一个值，则输出 Observable 将停止镜像源 Observable 并完成。如果此 notifier 没有发出任何值并直接完成，则 takeUntil 将传递所有值
 */
/*import { fromEvent, interval, take, takeUntil } from "rxjs";
let numberObservable = interval(1000);
let eventObservable = fromEvent(document.body, 'click');
let numberObservable1 = numberObservable.pipe(takeUntil(eventObservable));
numberObservable1.subscribe(value => {
    console.log(value);
})*/

// *******************************************************************************

/**
 * skip
 * https://rxjs.tech/api/operators/skip
 * 跳过源 Observable 发送的前 count 个值
 */
/*import { interval, skip } from "rxjs";
interval(1000)
    .pipe(skip(10))
    .subscribe(value => {
        console.log(value);
    })*/

// *******************************************************************************

/**
 * takeLast
 * https://rxjs.tech/api/operators/takeLast
 * 等待源完成，然后从源发送最后 N 个值，由 count 参数指定
 */
/*import { interval, of, take, takeLast } from 'rxjs';

of(1, 2, 3, 4, 5, 6)
    .pipe(takeLast(2))
    .subscribe(value => {
        console.log(value);
    });
interval(500)
    .pipe(take(10))
    .pipe(takeLast(2))
    .subscribe(value => {
        console.log(value);
    })*/

// *******************************************************************************

/**
 * last
 * https://rxjs.tech/api/operators/last
 */
/*import { last, of } from 'rxjs'

of(1, 2, 3, 4, 5)
    .pipe(last(x => x % 2 === 0))
    .subscribe(value => {
        console.log(value);
    })*/

// *******************************************************************************

/**
 * debounce
 * https://rxjs.tech/api/operators/debounceTime
 */
/*import { debounceTime, fromEvent, map } from "rxjs";
const input = document.createElement('input');
document.body.appendChild(input);
fromEvent<InputEvent>(input, 'input')
    .pipe(debounceTime(300), map(e => (e!.target! as any).value!))
    .subscribe(value => {
        console.log(value);
    })*/

// *******************************************************************************

/**
 * throttleTime
 * https://rxjs.tech/api/index/function/throttleTime
 */
/*import { fromEvent, throttleTime } from "rxjs";
fromEvent(document, 'click')
    .pipe(throttleTime(1000))
    .subscribe(value => {
        console.log(value);
    })*/

// *******************************************************************************

/**
 * distinct
 * https://rxjs.tech/api/operators/distinct
 * 返回一个 Observable，它会发送源 Observable 发出的那些与以前发出过的条目不同的条目
 */
/*import { distinct, of } from "rxjs";
of(1,2,3,4,4,2,4,3,1)
    .pipe(distinct())
    .subscribe(value => {
        console.log(value);
    });
of({name: 'jack'}, {name: 'lucy'}, {name: 'jack'})
    .pipe(distinct(({name}) => name ))
    .subscribe(value => {
        console.log(value);
    })*/
