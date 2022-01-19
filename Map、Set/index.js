const map = new Map()
map.set('name', 'lisi');
map.set('age', 22);
map.set(123, 456)
console.log(map);


const map3 = new Map()
map3.set('1', 'string')
map3.set(1, 'number')
map3.set(1, 'number11111')
map3.set(true, 'boolean')
console.log(map3);


const obj = {1: 'one'};
console.log(obj[1] === obj['1'])

const obj1 = {}
obj1[obj] = 'obj key';
console.log(obj1);


const map4 = new Map();
map4.set(obj, 'obj key');
console.log(map4);


const map5 = new Map()
map5.set({}, 'one');
map5.set({}, 'two');
console.log(map5);

const obj2 = {}
const map6 = new Map()
map6.set(obj2, 'one');
map6.set(obj2, 'two');
console.log(map6);


const set = new Set()

set.add('a');
set.add('b');
set.add('c');
set.add('a');
console.log(set);

const set2 = new Set(['a', 'b', 'c', 'a']);
console.log(set2);

const arr = [...set2]
console.log(arr);


