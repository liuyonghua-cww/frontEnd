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
    fun1: (value: string) => string
}
class Class1 implements IClass{
    fun1(value: string): string {
        return "";
    }

}

