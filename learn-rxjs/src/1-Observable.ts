import { Observable } from "rxjs";

const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    throw 'some error'
    subscriber.complete();
    subscriber.next('not work')
})
observable.subscribe({
    next: value => {
        console.log(value);
    },
    complete: () => {
        console.log('complete')
    },
    error: err => {
        console.error(err);
    }
})
