<template>
    <h1>proxy test</h1>
    <span>信息：</span>
    <div><span>姓名：</span><span>{{name}}</span></div>
    <div><span>职位：</span><span>{{job.type}}</span></div>
    <div><span>薪水：</span><span>{{job.salary}}</span></div>
    <div v-if="job.workTime"><span>工作时长：</span><span>{{job.workTime}}</span></div>
    <button @click="addProperty">新增 工作时长 属性</button>
    <button @click="deleteProperty">删除 薪水 属性</button>
</template>

<script>
import { reactive, ref } from "vue";

export default {
    name: "Proxy-test",
    components: {},
    props: {},
    setup() {
        const name = ref('lisi');
        const job = reactive({
            type: '前端',
            salary: '20K'
        })
        // vue3 中不存在 vue2 中新增删除对象属性时不能响应式的问题
        const changeInfo = () => {
            name.value = 'zhangsan';
            job.type = '后端';
            job.salary = '40k'
        }
        const addProperty = () => {
            job.workTime = '8h'
        }

        const deleteProperty = () => {
            delete job.salary
        }

        return {
            name,
            job,
            changeInfo,
            addProperty,
            deleteProperty
        }
    }
};
</script>

<style scoped>

</style>
