## 简单快速撸懂Vuex
以往我们在做一个组件间通信的时候，更多的情况是父传子或者是子传父；当遇到兄弟组件之间需要传值的时候，一般让父组件充当媒介进行传值和使用EventBus进行传值，但是这两种方法都不是很好，特别是当数据量多的时候就更加显得鸡肋了，这时候就出现了一个东西，没错就是Vuex啦！
### Vuex是什么？
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex在一定程度上借鉴了Flux和Redux；
### 安装
### 1. script 标签引入
```javascript
<script src="/path/to/vuex.js"></script>
```
### 2. npm 引入
```javascript
npm install vuex --save
```
#### 2.1 在项目根目录下创建一个store文件夹，在该文件夹下创建一个index.js文件
#### 2.2 初始化index.js文件
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
   state: {},
   getters: {},
   mutations: {},
   actions: {},
   modules: {}
})
```
#### 2.3 将store挂载到Vue实例
```javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store'
new Vue({
   el: '#app',
   store,
   render: h => h(App)
})
```
### 核心内容
### 1. state
state相当于组件中的data，用来存储全局数据
```javascript
state: {
   num: 0
}
```
state中存储的状态都是响应式的，所有在组件中使用state时一般把它作为一个计算属性的返回值。
```javascript
export default {
    name: 'Home',
    computed: {
      num() {
          return this.$store.state.num;
      }
    },
    components: {
        HelloWorld
    }
}
```
### 2. getters
getters相当于组件的computed，可以将组件中统一使用到的computed都放到getters中来操作。
```javascript
getters: {
   compareNum: state => {
      return state.num > 10;
   }
}
```
在组件中使用时我们可以通过 $store.getters.handleNum 来获取。  
getter也可以返回一个方法。
```javascript
state: {
   users: [
      {name: 'jack', age: 10},
      {name: 'lucy', age: 18},
   ]
},
getters: {
   getUserByAge: state => age => {
      return state.users.filter(user => user.age > 10);
   }
}
```
### 3. mutations
mutations相当于组件中的methods，它是改变store状态的唯一方式，但是它不能使用异步方法（定时器、ajax、...）。组件使用时需要提交commit；  
mutations中的方法接收两个参数，state和传入的参数payload，当commit时传入的参数可以用payload接收，没有传入时就是undefined。
```javascript
mutations: {
    setNUm(state, payload) {
      state.num = payload;
    }
  }
```
组件中使用：this.$store.commit(方法名, 参数)，当需要传入多个参数时，可以以对象的形式传入。
```javascript
export default {
    name: 'Home',
    methods: {
        setNum() {
            this.$store.commit('setNUm', 20)
        }
    }
}
</script>
```
### 4. actions
actions专门用来处理异步，实际修改state状态值的，依然是mutations。action跟mutations中的方法一样接收两个参数，上下文对象context和payload。

```javascript
mutations: {
    decreaseNum(state, payload) {
      state.num -= payload;
    }
},
actions: {
    // 从context中解构出commit
    decreaseNumAsync({ commit }, payload) {
      setTimeout(() => {
        commit('decreaseNum', payload);
      })
    }
},
```

组件中使用

```javascript
export default {
    name: 'Home',
    methods: {
        decreaseNum() {
            this.$store.dispatch('decreaseNumAsync', 10)
        }
    }
}
```

