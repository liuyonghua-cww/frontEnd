<template>
    <div class="todo-item">
        <el-checkbox :value="props.item.status === FINISHED"/>
        <span>{{ item.content }}</span>
        <div>
            <el-button type="primary">正在做</el-button>
            <el-button type="danger">删除</el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ITodoItem, TODO_ITEM_STATUS } from "@/store/modules/todo";

const props = defineProps<{
    item: ITodoItem
}>()


const WILL_DO = TODO_ITEM_STATUS.WILL_DO;
const FINISHED = TODO_ITEM_STATUS.FINISHED;
const DOING = TODO_ITEM_STATUS.DOING;


</script>


<style scoped lang="scss">
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

}

</style>
