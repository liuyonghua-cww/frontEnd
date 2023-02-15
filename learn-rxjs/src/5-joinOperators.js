"use strict";
/**
 * concatAll
 * https://rxjs.tech/api/operators/concatAll
 * 依次连接各个内部 Observable，将高阶 Observable 转换为一阶 Observable。
 */
/*import { concatAll, fromEvent, map, of } from "rxjs";
let eventObservable = fromEvent(document.body, 'click');
let observable = eventObservable.pipe(map(() => of(1,2,3)));
observable.pipe(concatAll()).subscribe(value => {
    console.log(value);
})*/
// *******************************************************************************
/**
 * concat
 * 将多个observable示例合并成一个
 */
/*import { of, interval, concat } from "rxjs";
concat(of(1,2,3), of(4,5,6), interval(1000))
    .subscribe(value => {
        console.log(value);
    })*/
// *******************************************************************************
/**
 * startWidth
 * https://rxjs.tech/api/operators/startWith
 * Observable 之前同步发送提供的值
 */
/*import { interval, map, startWith } from "rxjs";
interval(500)
    .pipe(map(x => x * 10), startWith('start log'))
    .subscribe(value => {
        console.log(value);
    })*/
// *******************************************************************************
/**
 * merge
 * https://rxjs.tech/api/index/function/merge
 * merge 订阅每个给定的输入 Observable（作为参数传入），并简单地将所有输入 Observable 中的所有值转发（不做任何转换）到输出 Observable。只有在所有输入 Observable 都完成后，输出 Observable 才会完成。输入 Observable 传递的任何错误都会立即在输出 Observable 上发送。
 */
/*import { interval, merge } from "rxjs";
merge(interval(1000), interval(500))
    .subscribe(value => {
        console.log(value);
    })*/
// *******************************************************************************
/**
 * zip
 * https://rxjs.tech/api/index/function/zip
 * 组合多个 Observable 以创建一个 Observable，其值是按顺序从其每个输入 Observable 的值中计算出来的。
 * 如果最后一个参数是函数，则此函数用于根据输入值计算要创建的值。否则，返回输入值数组。
 */
/*import { map, of, zip } from 'rxjs';
const nameObservable = of('jack', 'lucy', 'bob');
const ageObservable = of(10, 20, 30);
zip(nameObservable, ageObservable)
    .pipe(map(([name, age]) => (`姓名：${name}，年龄：${age}`)))
    .subscribe(value => {
        console.log(value);
    })*/
// *******************************************************************************
/**
 * withLatestFrom
 * https://rxjs.tech/api/operators/withLatestFrom
 * withLatestFrom 只会在源发送一个值时将源 Observable（实例）中的每个值与来自其它输入 Observable 的最新值组合在一起，使用可选的 project 函数来确定要在输出 Observable 上发送的值。在输出 Observable 发送一个值之前，所有输入 Observable 必须发送过至少一个值。
 */
/*import { fromEvent, interval, withLatestFrom } from "rxjs";
let eventObservable = fromEvent(document.body, 'click');
let numberObservable = interval(1000);
eventObservable
    .pipe(withLatestFrom(numberObservable,(e, v)=> e))
    .subscribe(value => {
        console.log(value);
    })*/
// *******************************************************************************
