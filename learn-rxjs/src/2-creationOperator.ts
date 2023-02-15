/**
 * of
 * https://rxjs.tech/api/index/function/of
 * 每个参数都会成为 next 通知
 * 发送完参数之后并通知完成
 */
/*import { of } from "rxjs";
const observable = of(1,2,3);
observable.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete')
    }
})*/

// *******************************************************************************

/**
 * form
 * https://rxjs.tech/api/index/function/from
 * 从 Array、数组类似对象、Promise、可迭代对象或 Observable 类似对象创建 Observable。
 */
/*import { from } from "rxjs";
const observable = from([1,2,3, 'hello']);
observable.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete')
    }
})

const observable1 = from('hello');
observable1.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete')
    }
})

const observable2 = from(new Promise(resolve => {
    setTimeout(() => {
        resolve('promise')
    }, 1000)
}));
observable2.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete')
    }
})

const observable3 = from(new Set([1,2,3]));
observable3.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete')
    }
})*/

// *******************************************************************************

/**
 * formEvent
 * https://rxjs.tech/api/index/function/fromEvent
 * 创建一个 Observable，它会发出来自给定事件目标的特定类型的事件。
 */
/*import { fromEvent } from 'rxjs';
let observable = fromEvent(document.body, 'click');
observable.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete')
    }
})*/

// *******************************************************************************

/**
 * empty
 * https://rxjs.tech/api/index/function/empty
 * 创建一个不向 Observer 发出任何条目并立即发出完成通知的 Observable。
 */
/*import { empty } from 'rxjs';
const observable = empty();
observable.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete');
    }
})*/

// *******************************************************************************

/**
 * interval
 * https://rxjs.tech/api/index/function/interval
 * 创建一个 Observable，它在指定的 SchedulerLike 上按照指定的时间间隔发送连续数列。
 */
/*import { interval } from 'rxjs';
const observable = interval(1000);
observable.subscribe(value => {
    console.log(value);
})*/

// *******************************************************************************

/**
 * timer
 * https://rxjs.tech/api/index/function/timer
 * timer(time1, time2) 间隔 time1 发送第一个值，此后每过 time2 发送之后的值
 * timer(time1) 间隔 time1 发送第一个值 然后通知完成
 */
// import { timer } from 'rxjs';
// const observable = timer(1000, 5000);
// let subscription = observable.subscribe({
//     next: value => {
//         console.log(value);
//     },
//     complete: () => {
//         console.log('complete');
//     }
// });
// setTimeout(() => {
//     subscription.unsubscribe(); // 取消订阅
// }, 5000)
//
// const observable1 = timer(1000);
// observable1.subscribe({
//     next: value => {
//         console.log(value);
//     },
//     complete: () => {
//         console.log('complete');
//     }
// })

// *******************************************************************************

