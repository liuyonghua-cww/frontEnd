### 了解JavaScript中的Map和Set对象

ECMAScript 2015规范引入了两种新的可迭代对象类型:Map，它是键值对的有序集合；Set，是唯一值的集合。在本文中将介绍这两个对象以及他们和Object和Array的相似或不同之处；

### Map

Map是键值对的集合，可以用任何的数据类型作为键，他拥有Object（唯一键值对集合）和Array（有序集合）的元素；但是在概念上更类似于Object，虽然他每一项的大小和顺序向Array一样被保留，但是本身是像Object一样的键值对；

#### 使用 new Map() 实例化

```javascript
const map = new Map()
```
#### 添加值
使用set()方法向Mpa中添加值。第一个参数将是键，第二个参数将是值。
```javascript
map.set('name', 'lisi');
map.set('age', 22);
map.set(123, 456)
```

output:

![](C:\Users\GW_LYH\Desktop\自己\image\企业微信截图_20220113163755.png)

在这里我们可以看到Map有索引，并且使用 => 表示键值对

#### 实例化传入初始值
除了给Map手动设置值外，我们还可以在实例化的时候传入初始值

```javascript
[ [ 'key1', 'value1'], ['key2', 'value2'] ]
```

```javascript
const map1 = new Map([
      ['name', 'lisi'],
      ['age', 22],
      [123, 456]
  ])
```

output

![](C:\Users\GW_LYH\Desktop\自己\image\企业微信截图_20220113170134.png)

[ [ 'key1', 'value1'], ['key2', 'value2'] ] 与调用 Object.entries ()的结果相同。所以我们可以很方便的实现Object和Map之间的转换。

Object转Map

```javascript
const obj = {
    name: 'lisi',
    age: '22',
    123: 456
  }
const map2 = new Map(Object.entries(obj))
```

Map转Object

```javascript
const obj1 = Object.fromEntries(map2)
```







