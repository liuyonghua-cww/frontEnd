import { Mutations, TYPES, AppState, SingleList } from "@/store/modules/app/types";
import { MutationTree } from "vuex";
const mutations: Mutations & MutationTree<AppState> = {
    [TYPES.SET_SINGLE_LIST](state: AppState, singleList: SingleList): void {
        state.singleList = singleList;
    },
    [TYPES.SET_PAGE_COUNT](state: AppState, pageCount: number): void {
        state.pageCount = pageCount;
    },
    [TYPES.GET_LIST](state: AppState, list: SingleList[]): void {
        state.list = list;
    },
    [TYPES.SET_PAGE_INDEX](state: AppState, pageIndex: number): void {
        state.pageIndex = pageIndex;
    },
    [TYPES.GET_ECHARTS_OPTION](state: AppState, echartsOptions: string): void {
        state.echartsOption = echartsOptions;
    }

}
export default mutations
