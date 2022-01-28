<template>
    <h1>WatchEffect</h1>
    <span>{{ count }}</span>
    <br>
    <button @click="count++">count++</button>
    <br>
    <span>信息：</span>
    <div>姓名：{{ person.name }}</div>
    <div>年龄：{{ person.age }}</div>
    <div>薪资：{{ person.job.j1.salary }}</div>
    <button @click="person.name+='!'">改变姓名</button>
    <button @click="person.age++">改变年龄</button>
    <button @click="person.job.j1.salary++">改变薪资</button>
</template>

<script>
import {
    reactive,
    ref,
    watchEffect
} from 'vue';

export default {
    name: "WatchEffect",
    components: {},
    props: {},
    setup() {
        const count = ref(0);
        const person = reactive({
            name: 'jack',
            age: 30,
            job: {
                j1: {
                    salary: 40
                }
            }
        });
        // 不用指明监视哪个属性，监视的回调中用到哪个属性，就监听哪个属性
        watchEffect(() => {
            const count1 = count.value;
            const salary = person.job.j1.salary;
            console.log('watchEffect执行');
        })
        return {
            count,
            person
        }
    }
};
</script>

<style scoped>

</style>
