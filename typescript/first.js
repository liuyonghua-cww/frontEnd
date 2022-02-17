"use strict";
((name) => {
    console.log(`hello typescript, my name is ${name}, 哈哈哈1`);
})('jack');
const getName = (person) => {
    console.log(`${person.firstName} ${person.lastName}`);
};
const person = {
    firstName: 'liu',
    lastName: 'yongHua'
};
getName(person);
// 元组类型
const arr = ['haha', 2, true];
console.log(arr);
// 枚举
var COLOR;
(function (COLOR) {
    COLOR[COLOR["RED"] = 1] = "RED";
    COLOR[COLOR["BLUE"] = 2] = "BLUE";
    COLOR[COLOR["GREEN"] = 3] = "GREEN";
})(COLOR || (COLOR = {}));
console.log(COLOR);
const str1 = 'haha';
const num1 = 1;
console.log(typeof str1);
console.log(typeof num1);
const getLength = (value) => {
    if (value.length) {
        return value.length;
    }
    else {
        return value.toString().length;
    }
};
getLength(123);
class Class1 {
    // 在构造函数中，如果使用属性修饰符对参数进行修饰，那么这个参数就会自动变成改类的一个属性
    constructor(v_private = 'v_private', v_protected = 'v_protected', v_public = 'v_public') {
        this.v_private = v_private;
        this.v_protected = v_protected;
        this.v_public = v_public;
        this._name = 'jack';
        this.a = 'aaa';
    }
    get name() {
        console.log('获取了name属性');
        return this._name;
    }
    set name(value) {
        console.log(`设置了name属性为${value}`);
        this._name = value;
    }
    fun1(value) {
        return "";
    }
}
Class1.v_static = 'v_static';
const class1 = new Class1();
console.log(class1);
// 抽象类不能被实例化
class Animal {
}
class Dog extends Animal {
    eat() {
        console.log(`小狗吃东西`);
    }
}
class Pig extends Animal {
    eat() {
        console.log(`小猪吃东西`);
    }
}
const fun1 = (value) => {
};
