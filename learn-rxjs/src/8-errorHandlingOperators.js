"use strict";
/**
 * catchError
 * https://rxjs.tech/guide/operators
 */
/*import { catchError, map, of } from "rxjs";

of('a', 'b', 1)
    .pipe(
        map(value => (value as string).toUpperCase()),
        catchError(err => of('h'))
    )
    .subscribe({
        next: value => {
            console.log(value);
        },
        error: err => {
            console.log(err);
        }
    })*/
Object.defineProperty(exports, "__esModule", { value: true });
// *******************************************************************************
/**
 * retry
 * https://rxjs.tech/api/operators/retry
 */
const rxjs_1 = require("rxjs");
(0, rxjs_1.zip)((0, rxjs_1.of)('a', 'b', 1), (0, rxjs_1.interval)(1000), (x, y) => x)
    .pipe((0, rxjs_1.map)(v => v.toUpperCase()), (0, rxjs_1.retry)(1))
    .subscribe({
    next: value => {
        console.log(value);
    },
    error: err => {
        console.log(err);
    }
});
class Test {
}
