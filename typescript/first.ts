((name: string) => {
    console.log(`hello typescript, my name is ${ name }, 哈哈哈1`);
})('jack')

interface IPerson {
    firstName: string;
    lastName: string;
}

const getName = (person: IPerson): void => {
    console.log(`${ person.firstName } ${ person.lastName }`)
}
const person = {
    firstName: 'liu',
    lastName: 'yongHua'
}
getName(person);


// 元组类型
const arr: [ string, number, boolean ] = [ 'haha', 2, true ]
console.log(arr);

// 枚举
enum COLOR {
    RED = 1,
    BLUE,
    GREEN
}

console.log(COLOR);

// 联合类型
type type1 = string | number;
const str1: type1 = 'haha';
const num1: type1 = 1;
console.log(typeof str1);
console.log(typeof num1);

interface IGetLength {
    (value: type1): number
}

const getLength: IGetLength = (value: type1): number => {
    if ((<string>value).length) {
        return (value as string).length;
    } else {
        return value.toString().length;
    }
}

getLength(123)

interface IClass {
    fun1(value: string): string
}

class Class1 implements IClass{
    private a: string;
    private _name: string = 'jack';
    get name() {
        console.log('获取了name属性')
        return this._name;
    }
    set name(value: string) {
        console.log(`设置了name属性为${value}`)
        this._name = value;
    }
    // 在构造函数中，如果使用属性修饰符对参数进行修饰，那么这个参数就会自动变成改类的一个属性
    constructor(
        private v_private: string = 'v_private',
        protected v_protected: string = 'v_protected',
        public v_public: string = 'v_public'
    ) {
        this.a = 'aaa'
    }
    fun1(value: string): string {
        return "";
    }

}
const class1 = new Class1()
console.log(class1);


