"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const drag = document.createElement('div');
drag.style.width = '100px';
drag.style.height = '50px';
drag.style.backgroundColor = 'skyblue';
drag.style.position = 'absolute';
drag.style.top = '0';
drag.style.left = '0';
document.body.appendChild(drag);
let mouseDown = (0, rxjs_1.fromEvent)(drag, 'mousedown');
let mouseUp = (0, rxjs_1.fromEvent)(document.body, 'mouseup');
let mouseMove = (0, rxjs_1.fromEvent)(document.body, 'mousemove');
mouseDown
    .pipe((0, rxjs_1.map)(() => mouseMove.pipe((0, rxjs_1.takeUntil)(mouseUp))))
    .pipe((0, rxjs_1.concatAll)())
    .pipe((0, rxjs_1.map)((e) => ({ x: e.clientX, y: e.clientY })))
    .subscribe({
    next: value => {
        drag.style.left = value.x + 'px';
        drag.style.top = value.y + 'px';
    },
    complete: () => {
        console.log('complete');
    }
});
