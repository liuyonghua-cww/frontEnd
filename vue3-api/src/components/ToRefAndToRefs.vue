<template>
    <h1>toRef & toRefs</h1>
    <span>信息：</span>
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <!--<div>薪资：{{ salary }}</div>-->
    <div>薪资：{{ job.j1.salary }}</div>
    <button @click="name+='!'">改变姓名</button>
    <button @click="age++">改变年龄</button>
    <!--<button @click="salary++">改变薪资</button>-->
    <button @click="job.j1.salary++">改变薪资</button>
</template>

<script>
import {
    reactive,
    toRef,
    toRefs
} from 'vue';

export default {
    components: {},
    props: {},
    setup() {
        const person = reactive({
            name: 'jack',
            age: 30,
            job: {
                j1: {
                    salary: 40
                }
            }
        });

        return {
            /*name: toRef(person, 'name'),
            age: toRef(person, 'age'),
            salary: toRef(person.job.j1, 'salary')*/
            ...toRefs(person)
        }
    }
};
</script>

<style scoped>

</style>
