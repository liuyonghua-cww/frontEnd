import { ActionTree, Commit, Module, MutationTree } from 'vuex'

export enum TODO_TYPE {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    SET_TODO_STATUS = 'SET_TODO_STATUS',
    SET_TODO_LIST = 'SET_TODO_LIST',
}

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
    [TODO_TYPE.ADD_TODO]: (state: ITodoState, todoItem: ITodoItem) => void;
    [TODO_TYPE.REMOVE_TODO]: (state: ITodoState, id: number) => void;
    [TODO_TYPE.SET_TODO_LIST]: (state: ITodoState, todoList: ITodoItem[]) => void;
    [TODO_TYPE.SET_TODO_STATUS]: (state: ITodoState, data: { id: number; status: TODO_ITEM_STATUS }) => void;
}

export type AugmentedActionContext = {
    commit: Commit;
    state?: ITodoState
}

export interface ITodoActions {
    [TODO_TYPE.ADD_TODO]: ({commit}: AugmentedActionContext, todoItem: ITodoItem) => void;
    [TODO_TYPE.REMOVE_TODO]: ({commit}: AugmentedActionContext, id: number) => void;
    [TODO_TYPE.SET_TODO_LIST]: ({commit}: AugmentedActionContext, todoList: ITodoItem[]) => void;
    [TODO_TYPE.SET_TODO_STATUS]: ({commit}: AugmentedActionContext, data: { id: number; status: TODO_ITEM_STATUS }) => void;
}
