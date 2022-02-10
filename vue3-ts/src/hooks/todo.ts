import { ITodoItem, TODO_ITEM_STATUS } from "@/store/modules/todo";
import { Store, useStore } from "vuex";
import { TODO_ACTION_TYPES } from "@/store/modules/todo/actionTypes";

export interface IUseTodo {
    addTodo: (value: string) => void;
    removeTodo: () => void;
    setTodoStatus: () => void;
}
export const useTodo = (): IUseTodo => {
    const store: Store<any> = useStore();
    const addTodo = (value: string) => {
        const todoItem: ITodoItem = {
            id: new Date().getTime(),
            content: value,
            status: TODO_ITEM_STATUS.WILL_DO
        }
        store.dispatch(`todo/${TODO_ACTION_TYPES.ADD_TODO}`, todoItem)
    }
    const removeTodo = () => {

    }
    const setTodoStatus = () => {

    }

    return {
        addTodo,
        removeTodo,
        setTodoStatus
    }

}
