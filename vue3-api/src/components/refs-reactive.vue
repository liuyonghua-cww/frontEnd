<template>
    <h1>refs-reactive</h1>
    <span>信息：</span>
    <div><span>姓名：</span><span>{{name}}</span></div>
    <div><span>职位：</span><span>{{job.type}}</span></div>
    <div><span>薪水：</span><span>{{job.salary}}</span></div>
    <button @click="changeInfo">改变信息</button>
</template>

<script>
/**
 * ref与reactive的对比
 * 定义数据的角度：
 *   ref用来定义接了数据类型
 *   reactive用来定义对象或数组的类型
 *   ref也可以用来定义对象或数组的类型数据，他内部会自动通过reactive转为代理对象
 *
 * 原理的角度：
 *   ref通过Object.defineProperty()的get和set来实现响应式
 *   reactive通过Proxy来实现响应式，并通过Reflect操作源对象内部的数据
 *
 * 使用角度：
 *   ref定义的数据，操作数据时需要 .value，模板中读取数据时不需要 .value
 *   reactive定义的数据，操作读取数据时都需要 .value
 */
import {
    ref,
    reactive
} from 'vue'
export default {
    name: "refs-reactive",
    setup() {
        /*
       * ref 处理基本数据类型时响应式依靠的是 Object.defineProperty 的 get 与 set 完成
       * 处理对象类型的数据时，在内部求助了 Vue3 的一个新函数————reactive函数，内部依赖的是ES6的proxy 对象
       * */
        const name = ref('lisi');
        console.log(name);

        /*
        * const 代理对象 = reactive(源对象）
        * 接收一个对象或数组，返回一个代理对象（Proxy的实例对象，简称proxy对象）
        * reactive定义的数据响应式是 深层次 的
        * */
        const job = reactive({
            type: '前端',
            salary: '20K'
        })
        console.log(job);
        const changeInfo = () => {
            name.value = 'zhangsan';
            job.type = '后端';
            job.salary = '40k'
        }

        return {
            name,
            job,
            changeInfo
        }
    }
}
</script>

<style scoped>

</style>
