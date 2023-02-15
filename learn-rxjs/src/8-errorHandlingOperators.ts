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

// *******************************************************************************

/**
 * retry
 * https://rxjs.tech/api/operators/retry
 */
/*import { interval, map, of, retry, zip } from 'rxjs'

zip(of('a', 'b', 1), interval(1000), (x, y) => x)
    .pipe(map(v => (v as string).toUpperCase()), retry(1))
    .subscribe({
        next: value => {
            console.log(value);
        },
        error: err => {
            console.log(err);
        }
    })*/
