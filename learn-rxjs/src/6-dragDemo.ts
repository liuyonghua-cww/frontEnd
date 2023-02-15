import { concatAll, fromEvent, map, takeUntil } from "rxjs";

const drag = document.createElement('div');
drag.style.width = '100px';
drag.style.height = '50px';
drag.style.backgroundColor = 'skyblue';
drag.style.position = 'absolute';
drag.style.top = '0';
drag.style.left = '0';
document.body.appendChild(drag);

let mouseDown = fromEvent<MouseEvent>(drag, 'mousedown');
let mouseUp = fromEvent<MouseEvent>(document.body, 'mouseup');
let mouseMove = fromEvent<MouseEvent>(document.body, 'mousemove');

mouseDown
    .pipe(map(() => mouseMove.pipe(takeUntil(mouseUp))))
    .pipe(concatAll())
    .pipe(map<MouseEvent, { x: number, y: number }>((e) => ({x: e.clientX, y: e.clientY})))
    .subscribe({
        next: value => {
            drag.style.left = value.x + 'px';
            drag.style.top = value.y + 'px';
        },
        complete: () => {
            console.log('complete');
        }
    })

