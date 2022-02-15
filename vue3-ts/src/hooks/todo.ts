import { ITodoItem, TODO_ITEM_STATUS, TODO_TYPE } from "@/store/modules/todo/types";
import { Store, useStore } from "vuex";
import { watch } from 'vue'
import * as _ from  'lodash';

export interface IUseTodo {
    addTodo: (value: string) => void;
    removeTodo: (id: number) => void;
    setTodoStatus: (id: number, status: TODO_ITEM_STATUS) => void;
    setTodoList: () => void;
}
export const useTodo = (): IUseTodo => {
    const store: Store<any> = useStore();
    watch(() => _.cloneDeep(store.state.todo.todoList), (newValue, oldValue) => {
        saveTodoList();
    })
    const addTodo = (value: string) => {
        const todoItem: ITodoItem = {
            id: new Date().getTime(),
            content: value,
            status: TODO_ITEM_STATUS.WILL_DO
        }
        store.dispatch(`todo/${TODO_TYPE.ADD_TODO}`, todoItem)
    }
    const removeTodo = (id: number) => {
        store.dispatch(`todo/${TODO_TYPE.REMOVE_TODO}`, id)

    }
    const setTodoStatus = (id: number, status: TODO_ITEM_STATUS) => {
        store.dispatch(`todo/${TODO_TYPE.SET_TODO_STATUS}`, {id: id, status})
    }

    const saveTodoList = (): void => {
        localStorage.setItem('todoList', JSON.stringify(store.state.todo.todoList));
    }

    // 初始化设置默认值
    const setTodoList = (): void => {
        const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
        store.dispatch(`todo/${TODO_TYPE.SET_TODO_LIST}`, todoList);
    }

    return {
        addTodo,
        removeTodo,
        setTodoStatus,
        setTodoList
    }

}
