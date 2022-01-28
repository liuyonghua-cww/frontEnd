<template>
    <h1>Watch</h1>
    <h2>ref</h2>
    <span>{{ count }}</span>
    <br>
    <span>{{ count1 }}</span>
    <br>
    <button @click="changeCount">count++</button>
    <button @click="changeCount1">count1++</button>
    <br>
    <h2>reactive</h2>
    <span>信息：</span>
    <div>姓名：{{ person.name }}</div>
    <div>年龄：{{ person.age }}</div>
    <div>薪资：{{ person.job.j1.salary }}</div>
    <button @click="person.name+='!'">改变姓名</button>
    <button @click="person.age++">改变年龄</button>
    <button @click="person.job.j1.salary++">改变薪资</button>
    <br>
    <span>{{ arr }}</span>
    <button @click="arr[1]++">改变arr</button>
</template>

<script>
import {
    ref,
    watch,
        reactive
} from 'vue';
import * as _ from 'lodash'

export default {
    name: "Watch",
    components: {},
    setup() {
        const count = ref(0);
        const count1 = ref(10)
        const changeCount = () => {
            count.value++;
        };
        const changeCount1 = () => {
            count1.value++;
        };
        const person = reactive({
            name: 'jack',
            age: 30,
            job: {
                j1: {
                    salary: 40
                }
            }
        })
        const arr = reactive([0,1,2,3])
        // 情况1：监听ref定义的一个响应式数据
        // watch(count, (newV, oldV) => {
        //     console.log(`count值改变了`, newV, oldV);
        // }, {immediate: true})

        // 情况2：监听ref定义的多个响应式数据
        // watch(count, (newV, oldV) => {
        //     console.log(`count值改变了`, newV, oldV);
        // })
        // watch(count1, (newV, oldV) => {
        //     console.log(`count1值改变了`, newV, oldV);
        // })
        // watch([count, count1], (newV, oldV) => {
        //     console.log(`count 或 count1 的值改变了`, newV, oldV);
        // })

        /**
         * 情况3：监听reactive定义的一个响应式数据
         * 注意：
         *     1. 监听reactive定义的数据时，都需要传入一个回调函数，回调函数中返回拷贝出来的副本，不然无法获取到正确的oldValue
         *     2. 默认开启deep:true  即使你设置 deep:false 也是无效的
         */
        // watch(() => _.cloneDeep(person), (newV, oldV) => {
        //     console.log(`person值改变了`, newV, oldV);
        // })
        // watch(() => _.cloneDeep(arr), (newV, oldV) => {
        //     console.log(`arr值改变了`, newV, oldV);
        // })


        // 情况4：监听reactive定义的一个响应式数据中的某个属性
        // watch(() => person.name, (newV, oldV) => {
        //     console.log(`person的name值改变了`, newV, oldV);
        // })

        // 情况5：监听reactive定义的一个响应式数据中的某些属性
        // watch([() => person.name, () => person.age], (newV, oldV) => {
        //     console.log(`person的值改变了`, newV, oldV);
        // })

        // 特殊情况
        watch(() => _.cloneDeep(person.job), (newV, oldV) => {
            console.log(`person的job改变了`, newV, oldV);
        })
        return {
            count,
            count1,
            changeCount,
            changeCount1,
            person,
            arr
        };
    }

};
</script>

<style scoped>

</style>
