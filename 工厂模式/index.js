class Apple {
    constructor(props) {
        this.name = props.name
    }
}

class Banana {
    constructor(props) {
        this.name = props.name
    }
}

// class FruitsFactory {
//     constructor(type, props) {
//         switch (type) {
//             case 'apple':
//                 return new Apple(props);
//             case 'banana':
//                 return new Banana(props);
//         }
//     }
// }
//
// const apple = new FruitsFactory('apple', {name: '苹果'});
// const banana = new FruitsFactory('banana', {name: '香蕉'});
// console.log(apple);
// console.log(banana);



const fruitsFactories = {}
fruitsFactories['apple'] = Apple;
fruitsFactories['banana'] = Banana;

class FruitsFactory {
    constructor(type, props) {
        return new fruitsFactories[type](props);
    }
}

const apple = new FruitsFactory('apple', {name: '苹果'});
const banana = new FruitsFactory('banana', {name: '香蕉'});
console.log(apple);
console.log(banana);

