import {Commit} from 'vuex'
export interface SingleList {
    pageIndex: number;
    ids: string[];
    path: string;
}
export interface AppState {
    pageCount: number;
    pageIndex: number;
    list: SingleList[];
    singleList: SingleList // 某一页的数据,
    echartsOption: string;
}
export enum TYPES {
    GET_LIST = 'GET_LIST',
    SET_PAGE_COUNT = 'SET_PAGE_COUNT',
    SET_SINGLE_LIST = 'SET_SINGLE_LIST',
    SET_PAGE_INDEX = 'SET_PAGE_INDEX',
    GET_ECHARTS_OPTION = 'GET_OPTION',
    CHANGE_ECHARTS_OPTION = 'CHANGE_OPTION'
}

export type AugmentedActionContext = {
    commit: Commit;
    state: AppState
}

export interface Mutations {
    [TYPES.GET_LIST](state: AppState, list: SingleList[]): void;
    [TYPES.SET_PAGE_COUNT](state: AppState, pageSize: number): void;
    [TYPES.SET_SINGLE_LIST](state: AppState, singleList: SingleList): void;
    [TYPES.SET_PAGE_INDEX](state: AppState, pageIndex: number): void;
    [TYPES.GET_ECHARTS_OPTION](state: AppState, echartsOption: string): void;
}

export interface Actions {
    [TYPES.GET_LIST]({commit}: AugmentedActionContext): void;
    [TYPES.SET_SINGLE_LIST]({commit}: AugmentedActionContext, singleList: SingleList): void;
    [TYPES.SET_PAGE_INDEX]({commit}: AugmentedActionContext,  pageIndex: number): void;
    [TYPES.GET_ECHARTS_OPTION]({commit}: AugmentedActionContext, params: {path: string, id: string}): Promise<void>;
}
