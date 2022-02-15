<template>
    <item v-for="item of todoList"
          :key="item.id"
          :item="item"
    ></item>
</template>
<script lang="ts" setup>
import Item from './Item/index.vue';
import { Store, useStore } from "vuex";
import { ITodoItem } from "@/store/modules/todo/types";
import { computed } from "vue"

const store: Store<any> = useStore();
const todoList = computed<ITodoItem[]>(() => store.state.todo.todoList);

</script>


<style scoped>

</style>
