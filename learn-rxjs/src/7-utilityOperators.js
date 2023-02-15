"use strict";
/**
 * delay
 * https://rxjs.tech/api/operators/delay
 * 将源 Observable 的条目的发送延迟给定的超时时长或等到给定的时间（Date）
 */
/*import { delay, fromEvent } from "rxjs";
fromEvent(document.body, 'click')
    .pipe(delay(1000))
    .subscribe(value => {
        console.log(value);
    })*/
// *******************************************************************************
/**
 * delayWhen
 * https://rxjs.tech/api/operators/delayWhen
 */
/* import { delayWhen, interval, of } from 'rxjs'

of(1, 2, 3, 4, 5)
    .pipe(delayWhen(() => interval(Math.random() * 5000)))
    .subscribe(value => {
        console.log(value);
    }) */
