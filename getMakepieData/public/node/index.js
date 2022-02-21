const fs = require('fs')
let directoryList = []
let fileNames = [];
const path = 'D:\\liuyonghua\\data\\test\\'

const readFile = (path) => {
    const files = fs.readdirSync(path)
    files.forEach(function (item, index) {
        let stat = fs.statSync(path + item)
        if (stat.isDirectory() === true) {
            directoryList.push(item)
            readFile(path + item + '\\')
        } else {
            // obj.path = path;  //路径
            // obj.filename = item  //名字
            // fileNames.push(obj);
            const fileName = item.split('.')[0];
            !fileNames.includes(fileName) && fileNames.push(fileName);
        }
    })
}
readFile(path);


console.log(fileNames.length);
