<template>
    <h1>computed</h1>
    <div><span>姓：</span><input v-model="person.firstName"/></div>
    <div><span>名：</span><input v-model="person.lastName"/></div>
    <div><span>姓名：</span><input v-model="fullName"/></div>
</template>

<script>
import {
    reactive,
    computed
} from 'vue';
export default {
    name: "Computed",
    setup() {
        let person = reactive({
            firstName: '张',
            lastName: '三'
        })
        // 简写
        /*const fullName = computed(() => {
            return person.firstName + person.lastName
        })*/

        // 完整写法
        const fullName = computed({
            get: () => {
                return person.firstName + person.lastName
            },
            set: v => {
                person.firstName = v.substr(0, 1)
                person.lastName = v.substr(1, v.length)
            }
        })
        return {
            person,
            fullName
        }
    }
}
</script>

<style scoped>


</style>
