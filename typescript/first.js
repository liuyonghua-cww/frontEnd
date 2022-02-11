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
    fun1(value) {
        return "";
    }
}
