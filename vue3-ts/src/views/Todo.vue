<template>
    <div class="todo-container">
        <todo-input />
        <todo-list />
    </div>

</template>

<script lang="ts" setup>
import TodoInput from '@/components/TodoInput/index.vue';
import TodoList from '@/components/TodoList/index.vue';
import { IUseTodo, useTodo } from "@/hooks";
const {setTodoList}: IUseTodo = useTodo();
setTodoList();
</script>


<style scoped lang="scss">
.todo-container {
    width: 400px;

}

</style>
