## 初识Web Worker
众所周知，js是单线程，没有多线程，这意味着多个脚本不能同时运行，如果js长时间运行耗时的任务就会导致页面假死。好消息是HTML5为我们提供了一种在主线程之外运行脚本的能力-web worker。
### 简介
Web Worker是HTML5标准的一部分，通过使用Web Worker，web应用程序可以在独立于主线程之外的后台线程中运行脚本，这样我们就可以把一些费时的处理任务交给Web Worker，从而让主线程不会因此被阻塞。
### Web Worker 的类型
该规范定义了两类Web Workers，Dedicated Workers和Shared Workers，Dedicated Workers只能在单一脚本中被使用，而Shared Workers可以同时被多个脚本使用。
### 创建worker
创建一个新的worker，只需要在主线程中调用Worker() 的构造器，指定一个脚本的 URI 来执行 worker线程：
```javascript
const myWorker = new Worker('worker.js');
```
### worker线程与主线程之间的通信
主线程；
```javascript
const myWorker = new Worker('worker.js');
// 接收worker传过来的消息
myWorker.addEventListener('message', function(e) {
    console.log(e.data);
});
// 向worker发送消息
myWorker.postMessage('Hello World');

```
worker：
```javascript
// 接收主线程传过来的消息
self.addEventListener('message', function(e) {
    console.log(e.data);
});
// 向主线程发送消息
self.postMessage('Hello World');
```
### 终止worker
如果你需要从主线程中终止一个运行中的 worker，可以调用 worker 的terminate 方法：
```javascript
myWorker.terminate();
```
而在 worker 线程中，workers 也可以调用自己的close 方法进行关闭
```javascript
self.close()
```
### 最后
worker在创建之后就会一直运行，这样有利于随时响应主线程的通信，这也会比较耗费资源，所以不应该过度使用，在我们使用完之后，应该立即进行关闭。