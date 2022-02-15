import { ITodoMutations, ITodoState, ITodoItem, TODO_ITEM_STATUS, TODO_TYPE } from "@/store/modules/todo/types";
import { MutationTree } from 'vuex';
export const mutations: ITodoMutations & MutationTree<ITodoState> = {
        [TODO_TYPE.ADD_TODO](state: ITodoState, todoItem: ITodoItem): void {
            state.todoList.unshift(todoItem);
        },

        [TODO_TYPE.REMOVE_TODO](state: ITodoState, id: number): void {
            state.todoList = state.todoList.filter(item => item.id !== id);
        },

        [TODO_TYPE.SET_TODO_LIST](state: ITodoState, todoList: ITodoItem[]): void {
            state.todoList = todoList;
        },

        [TODO_TYPE.SET_TODO_STATUS](state: ITodoState, data: { id: number; status: TODO_ITEM_STATUS }): void {
            switch (data.status) {
                case TODO_ITEM_STATUS.DOING:
                    state.todoList = state.todoList.map((item: ITodoItem) => {
                        if (item.id !== data.id && item.status === TODO_ITEM_STATUS.DOING) {
                            item.status = TODO_ITEM_STATUS.WILL_DO;
                        }
                        if (item.id === data.id) {
                            item.status = data.status;
                        }
                        return item;
                    });
                    break;
                case TODO_ITEM_STATUS.FINISHED:
                    state.todoList = state.todoList.map((item: ITodoItem) => {
                        if (item.id === data.id) {
                            item.status = data.status;
                        }
                        return item;
                    });
                    break;
                case TODO_ITEM_STATUS.WILL_DO:
                    state.todoList = state.todoList.map((item: ITodoItem) => {
                        if (item.id === data.id) {
                            item.status = data.status;
                        }
                        return item;
                    });
                    break;
                default:
                    break;
            }
        }
    }
;
