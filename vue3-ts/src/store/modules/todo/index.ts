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
}

type AugmentedActionContext = {
    commit: Commit;
    state?: ITodoState
}

export interface ITodoActions {
    [ TODO_ACTION_TYPES.ADD_TODO ]: ({ commit }: AugmentedActionContext, todoItem: ITodoItem) => void;
    [ TODO_ACTION_TYPES.REMOVE_TODO ]: ({ commit }: AugmentedActionContext, id: number) => void;
}

// endregion


const state: ITodoState = {
    todoList: []
}

const mutations: MutationTree<ITodoState> & ITodoMutations = {
    [ TODO_MUTATION_TYPES.ADD_TODO ](state: ITodoState, todoItem: ITodoItem): void {
        state.todoList.unshift(todoItem);
        console.log(state.todoList);
    },
    [ TODO_MUTATION_TYPES.REMOVE_TODO ](state: ITodoState, id: number): void {
        state.todoList = state.todoList.filter(item => item.id !== id)
    }


}
const actions: ActionTree<ITodoState, any> & ITodoActions = {
    [ TODO_ACTION_TYPES.ADD_TODO ]({commit}: AugmentedActionContext, todoItem: ITodoItem): void {
        commit(TODO_MUTATION_TYPES.ADD_TODO, todoItem)
    },
    [ TODO_ACTION_TYPES.REMOVE_TODO]({commit}: AugmentedActionContext, id: number): void {
        commit(TODO_MUTATION_TYPES.REMOVE_TODO, id)
    }


}
export const todoModule: Module<ITodoState, any> = {
    namespaced: true,
    state,
    mutations,
    actions
}
