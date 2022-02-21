const getString = () => {
    return new  Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello world!!')
        }, 2000)
    })
}
export const helloWorld = async () => {
    const str = await getString();
    console.log(str);
}
