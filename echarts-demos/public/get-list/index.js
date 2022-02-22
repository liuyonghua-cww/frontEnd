const fs = require('fs')
let directoryList = []
let list = []
const path = '../echarts/'

const readDirectory = (path) => {
    const files = fs.readdirSync(path)
    files.forEach(function (item, index) {
        let stat = fs.statSync(path + item)
        if (stat.isDirectory()) {
            directoryList.push({pageIndex: index, path: path + item + '/',ids: []})
        }
    })
}

const readFile = (pageInfo) => {
    const files = fs.readdirSync(pageInfo.path)
    files.forEach(function (item, index) {
        let stat = fs.statSync(pageInfo.path + item)
        if (!stat.isDirectory()) {
            const fileName = item.split('.')[0];
            !pageInfo.ids.includes(fileName) && pageInfo.ids.push(fileName);
        } else {


        }
    })
    list.push(pageInfo)
}

readDirectory(path)
directoryList.forEach((item, index) => {
    readFile(item)
})
fs.writeFile('./echartsList.json', JSON.stringify(list), function (error) {
    if (error) {
        console.log('写入失败')
    } else {
        console.log('写入成功了')
    }
})



