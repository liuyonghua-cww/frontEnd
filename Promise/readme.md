### 你真的知道Promise存在的意义吗
相信大多数同学一听到Promise就会想到回调地狱，想到异步，可能连最基本的Promise是什么都没有搞清楚（比如为什么Promise的构造函数是同步执行，为什么Promise.then()又是异步的）。下面我们就来了解一下Promise到底是什么？它存在的意义又是什么？它为什么要这样去设计？把这些搞清楚之后再去研究那些从应用层面上我们应该掌握的Promise的一些使用技巧。
### 准备工作
1. 初始化一个项目
2. 准备一组json数据
``````json
data.json
[
  {
    "id": 1,
    "name": "jack"
  },
  {
    "id": 2,
    "name": "lucy"
  },
  {
    "id": 3,
    "name": "zhangsan"
  },
  {
    "id": 4,
    "name": "lisi"
  }
]
``````

### 创建一个Promise示例

```javascript
index.js

const p = new Promise((resolve, reject) => {

});

p.then(res => {

})
```

相信大家都知道 new Promise() 是同步的，p.then() 是异步的；那有想过问什么会是这样吗？这就涉及到Promise为什么要这样去设计的问题了。
