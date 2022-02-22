import {Commit} from 'vuex'
export interface SingleList {
    pageIndex: number;
    ids: string[];
    path: string;
}
export interface AppState {
    pageSize: number;
    pageIndex: number;
    list: SingleList[];
    singleList: SingleList // 某一页的数据
}
export enum TYPES {
    GET_LIST = 'GET_LIST',
    SET_PAGE_SIZE = 'SET_PAGE_SIZE',
    SET_SINGLE_LIST = 'SET_SINGLE_LIST'
}

export type AugmentedActionContext = {
    commit: Commit;
    state?: AppState
}

export interface Mutations {
    [TYPES.GET_LIST](state: AppState, list: SingleList[]): void;
    [TYPES.SET_PAGE_SIZE](state: AppState, pageSize: number): void;
    [TYPES.SET_SINGLE_LIST](state: AppState, singleList: SingleList): void;
}

export interface Actions {
    [TYPES.GET_LIST]({commit}: AugmentedActionContext): void;
    [TYPES.SET_SINGLE_LIST]({commit}: AugmentedActionContext, singleList: SingleList): void;
}
