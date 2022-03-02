<template>
    <h3>人员信息</h3>
    <div>姓名：{{ store.name }}</div>
    <div>年龄：{{ store.age }}</div>
    <div>双倍年龄：{{ store.doubleAge }}</div>
    <div>任意倍速年龄-5倍：{{ store.anyMultipleAge(5) }}</div>
    <div>性别：{{ store.sex }}</div>
    <div>修改名称：<input type="text" v-model="name"></div>
</template>
<script lang="ts" setup>
import { useStore } from "@/store/useStore";
import { ref, watch } from "vue";
const name = ref<string>('')
const store = useStore();
watch(name, (newName) => {
    store.setName(name.value)
})
</script>
<style lang="scss">
</style>
