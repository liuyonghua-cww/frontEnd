/*
* index: webpack 打包的入口起点文件
* 运行指令：
*   开发环境 webpack ./src/index.js -o ./build/index.js --mode=development
*   生成环境
* */
import { helloWorld } from "./helloWorld";
import imageSrc from './assets/images/cat.jpg'
import svgSrc from './assets/images/bluebox.svg'
import txt from './assets/test.txt'
import pngSrc from './assets/images/b1.png'
import './assets/style.css'
import './assets/style-less.less'
// 再次引入lodash
import _ from 'lodash';

helloWorld()
const img = document.createElement('img');
img.src = imageSrc
document.body.appendChild(img)

const img2 = document.createElement('img');
img2.src = svgSrc
document.body.appendChild(img2)

const div = document.createElement('div')
div.innerText = txt;
document.body.appendChild(div);

const img3 = document.createElement('img');
img3.src = pngSrc
document.body.appendChild(img3)

const str = _.join(['hu', 'caiWei'], '')
console.log(str);
