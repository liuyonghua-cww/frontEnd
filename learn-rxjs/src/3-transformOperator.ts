/**
 * map
 * https://rxjs.tech/api/operators/map
 * 针对源 Observable 发送的每个值调用指定的 project 函数，并将这些结果作为一个 Observable 发出
 * 与 Array.prototype.map() 一样，它会针对传入的每个源值调用转换函数，以获取相应的输出值。
 */
/*import {interval, map} from "rxjs";
const observable = interval(1000);
let numberObservable = observable.pipe(map(e => e * 10));
numberObservable.subscribe(value => {
    console.log(value);
})*/

// *******************************************************************************

/**
 * mapTo
 * https://rxjs.tech/api/operators/mapTo
 * 将一个常量 value 作为参数，并且每当源 Observable 上发来一个值时就发送该值。换句话说，忽略实际的源值，并单纯根据发送时机来决定何时发送给定的 value。
 */
/*import { interval, mapTo } from "rxjs";
let stringObservable = interval(1000).pipe(mapTo('any value become hello'));
stringObservable.subscribe(value => {
    console.log(value);
})*/

// *******************************************************************************

/**
 * scan
 * https://rxjs.tech/api/operators/scan
 * 用于封装和管理状态。在使用 seed 值（第二个参数）或来自源的第一个值建立了初始状态之后，对来自源的每个值调用累加器（或“reducer 函数”）
 */
/*import { of, scan } from 'rxjs';
of(1,2,3)
    .pipe(scan((total, v) => total + v, 0))
    .subscribe(value => {
        console.log(value);
    })*/

// *******************************************************************************

/**
 * buffer
 * https://rxjs.tech/api/operators/buffer
 * 将已过去的值收集为一个数组，并仅当另一个 Observable 发出了值后才发送该数组。
 */
/*import { buffer, fromEvent, interval } from "rxjs";
interval(500)
    .pipe(buffer(fromEvent(document, 'click')))
    .subscribe(value => {
        console.log(value);
    })*/

// *******************************************************************************

/**
 * bufferTime
 * https://rxjs.tech/api/operators/bufferTime
 * 每隔特定时间段，对源 Observable 的值进行缓冲
 */
/*import { bufferTime, fromEvent, map } from "rxjs";

fromEvent<MouseEvent>(document, 'click')
    .pipe(bufferTime(1000), map(([v]) => v?.clientX))
    .subscribe(value => {
        console.log(value);
    })*/

// *******************************************************************************

/**
 * bufferCount
 * https://rxjs.tech/api/operators/bufferCount
 * 缓冲源 Observable 值，直到大小达到给定的最大 bufferSize。
 */
/*import { bufferCount, fromEvent, map } from "rxjs";
fromEvent<MouseEvent>(document, 'click')
    .pipe(bufferCount(2), map(value => {
        const arr: any[] = []
        value.forEach(v => {
            arr.push(v.clientX)
        })
        return arr;
    }))
    .subscribe(value => {
        console.log(value);
    })*/

// *******************************************************************************

/**
 * concatMap
 * https://rxjs.tech/api/operators/concatMap
 * 将每个源值投影到一个 Observable，该 Observable 会合并到输出 Observable 中，会以串行的方式等待每个源值完成，然后再合并下一个
 */
/*import { concatMap, fromEvent, interval, take } from "rxjs";

fromEvent(document, 'click')
    .pipe(concatMap(e => interval(1000).pipe(take(4))))
    .subscribe(value => {
        console.log(value);
    })*/
