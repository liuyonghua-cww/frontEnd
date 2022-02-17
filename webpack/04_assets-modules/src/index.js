/*
* index: webpack 打包的入口起点文件
* 运行指令：
*   开发环境 webpack ./src/index.js -o ./build/index.js --mode=development
*   生成环境
* */
import { helloWorld } from "./helloWorld";
helloWorld()
