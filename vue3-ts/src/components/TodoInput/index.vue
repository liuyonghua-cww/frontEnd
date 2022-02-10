<template>
    <el-input v-model="todoValue" placeholder="请输入" @keyup="setTodoValue"/>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { IUseTodo, useTodo } from "@/hooks";

const todoValue = ref<string>('')
const { addTodo }: IUseTodo = useTodo();

const setTodoValue = (e: KeyboardEvent): void => {
    if (e.keyCode === 13 && todoValue.value.trim().length) {
        addTodo(todoValue.value);
        todoValue.value = '';
    }
}



</script>

<style scoped>

</style>
