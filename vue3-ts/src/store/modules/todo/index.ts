import { TODO_MUTATION_TYPES } from "@/store/modules/todo/mutationTypes";
import { TODO_ACTION_TYPES } from "@/store/modules/todo/actionTypes";
import { ActionTree, Commit, Module, MutationTree } from 'vuex'


// region types
export enum TODO_ITEM_STATUS {
    FINISHED, // 已完成
    DOING, // 正在做
    WILL_DO// 将要做
}

export interface ITodoItem {
    id: number;
    content: string;
    status: TODO_ITEM_STATUS;
}

export interface ITodoState {
    todoList: ITodoItem[]
}

export interface ITodoMutations {
    [ TODO_MUTATION_TYPES.ADD_TODO ]: (state: ITodoState, todoItem: ITodoItem) => void;
    [ TODO_MUTATION_TYPES.REMOVE_TODO ]: (state: ITodoState, id: number) => void;
    [ TODO_MUTATION_TYPES.SET_TODO_LIST ]: (state: ITodoState, todoList: ITodoItem[]) => void;
    [ TODO_MUTATION_TYPES.SET_TODO_STATUS ]: (state: ITodoState, data: {id: number; status: TODO_ITEM_STATUS}) => void;
}

type AugmentedActionContext = {
    commit: Commit;
    state?: ITodoState
}

export interface ITodoActions {
    [ TODO_ACTION_TYPES.ADD_TODO ]: ({commit}: AugmentedActionContext, todoItem: ITodoItem) => void;
    [ TODO_ACTION_TYPES.REMOVE_TODO ]: ({commit}: AugmentedActionContext, id: number) => void;
    [ TODO_ACTION_TYPES.SET_TODO_LIST ]: ({commit}: AugmentedActionContext, todoList: ITodoItem[]) => void;
    [ TODO_ACTION_TYPES.SET_TODO_STATUS ]: ({ commit }: AugmentedActionContext, data: {id: number; status: TODO_ITEM_STATUS}) => void;
}

// endregion


const state: ITodoState = {
    todoList: []
}

const mutations: MutationTree<ITodoState> & ITodoMutations = {
    [ TODO_MUTATION_TYPES.ADD_TODO ](state: ITodoState, todoItem: ITodoItem): void {
        state.todoList.unshift(todoItem);
    },
    [ TODO_MUTATION_TYPES.REMOVE_TODO ](state: ITodoState, id: number): void {
        state.todoList = state.todoList.filter(item => item.id !== id);
    },
    [ TODO_MUTATION_TYPES.SET_TODO_LIST ](state: ITodoState, todoList: ITodoItem[]): void {
        state.todoList = todoList;
    },
    [ TODO_MUTATION_TYPES.SET_TODO_STATUS ]: (state: ITodoState, data: {id: number; status: TODO_ITEM_STATUS}): void => {
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
const actions: ActionTree<ITodoState, any> & ITodoActions = {
    [ TODO_ACTION_TYPES.ADD_TODO ]({commit}: AugmentedActionContext, todoItem: ITodoItem): void {
        commit(TODO_MUTATION_TYPES.ADD_TODO, todoItem)
    },
    [ TODO_ACTION_TYPES.REMOVE_TODO ]({commit}: AugmentedActionContext, id: number): void {
        commit(TODO_MUTATION_TYPES.REMOVE_TODO, id)
    },
    [ TODO_ACTION_TYPES.SET_TODO_LIST ]({commit}: AugmentedActionContext, todoList: ITodoItem[]): void {
        commit(TODO_MUTATION_TYPES.SET_TODO_LIST, todoList)
    },
    [ TODO_ACTION_TYPES.SET_TODO_STATUS ]({ commit }: AugmentedActionContext, data: {id: number; status: TODO_ITEM_STATUS}): void {
        commit(TODO_MUTATION_TYPES.SET_TODO_STATUS, data)
    }


}
export const todoModule: Module<ITodoState, any> = {
    namespaced: true,
    state,
    mutations,
    actions
}
