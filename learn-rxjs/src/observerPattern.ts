
class Producer {
    private listeners: Function[] = [];
    constructor() {

    }

    addListener(listener: Function) {
        this.listeners.push(listener);
    }

    removeListener(listener: Function) {
        this.listeners.splice(this.listeners.indexOf(listener), 1)
    }
    notify(message: any) {
        this.listeners.forEach(listener => {
            listener(message)
        })

    }
}
const producer = new Producer();
function listener1(message: any) {
    console.log(message + 'from listener1');
}
function listener2(message: any) {
    console.log(message + 'from listener2');
}
producer.addListener(listener1); // 註冊監聽
producer.addListener(listener2);
producer.notify('A new course!!')
