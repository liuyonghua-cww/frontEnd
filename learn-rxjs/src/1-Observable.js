"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const observable = new rxjs_1.Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    throw 'some error';
    subscriber.complete();
    subscriber.next('not work');
});
observable.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete');
    },
    error: err => {
        console.error(err);
    }
});
