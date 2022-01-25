<template>
    <span>信息：</span>
    <div><span>姓名：</span><span>{{name}}</span></div>
    <div><span>职位：</span><span>{{job.type}}</span></div>
    <div><span>薪水：</span><span>{{job.salary}}</span></div>
    <button @click="changeInfo">改变信息</button>
</template>

<script>
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
