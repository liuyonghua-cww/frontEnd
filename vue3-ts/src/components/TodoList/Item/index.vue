<template>
    <div class="todo-item">
        <el-checkbox :model-value="item.status === FINISHED"
                     @change="changeStatus"
                     class="checkbox"
        />
        <span class="content">{{ item.content }}</span>
        <div class="operation">
            <el-button type="primary" @click="setDoing"
                       v-if="item.status === WILL_DO || item.status === DOING"
                       :disabled="item.status === DOING"

            >{{ item.status === WILL_DO ? '开始做' : '正在做' }}</el-button>
            <el-button type="primary"
                       v-else
                       plain
            >已完成</el-button>
            <el-button type="danger" @click="removeTodo(item.id)">删除</el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ITodoItem, TODO_ITEM_STATUS } from "@/store/modules/todo/types";
import { Store, useStore} from 'vuex'
import { useTodo } from "@/hooks";
import { useProp } from "@/hooks/useProp";
const props = defineProps<{
    item: ITodoItem
}>()


const WILL_DO = TODO_ITEM_STATUS.WILL_DO;
const FINISHED = TODO_ITEM_STATUS.FINISHED;
const DOING = TODO_ITEM_STATUS.DOING;
const { setTodoStatus, removeTodo } = useTodo()
const changeStatus = (value: boolean): void => {
    if (value) {
        setTodoStatus(props.item.id, TODO_ITEM_STATUS.FINISHED);
    } else {
        setTodoStatus(props.item.id, TODO_ITEM_STATUS.WILL_DO);
    }

}

const setDoing = (): void => {
    setTodoStatus(props.item.id, TODO_ITEM_STATUS.DOING);
}


</script>


<style scoped lang="scss">
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    >.checkbox {
        width: 20px;
    }

    >.content {
        padding-left: 10px;
        width: calc(100% - 150px - 20px);
    }

    > .operation {
        width: 150px;
    }

}

</style>
