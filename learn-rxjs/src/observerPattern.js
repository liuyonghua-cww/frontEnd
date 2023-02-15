"use strict";
class Producer {
    constructor() {
        this.listeners = [];
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    removeListener(listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    notify(message) {
        this.listeners.forEach(listener => {
            listener(message);
        });
    }
}
const producer = new Producer();
function listener1(message) {
    console.log(message + 'from listener1');
}
function listener2(message) {
    console.log(message + 'from listener2');
}
producer.addListener(listener1); // 註冊監聽
producer.addListener(listener2);
producer.notify('A new course!!');
