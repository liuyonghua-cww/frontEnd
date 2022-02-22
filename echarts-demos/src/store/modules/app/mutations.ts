import { Mutations, TYPES, AppState, SingleList } from "@/store/modules/app/types";
import { MutationTree } from "vuex";
const mutations: Mutations & MutationTree<AppState> = {
    [TYPES.SET_SINGLE_LIST](state: AppState, singleList: SingleList): void {
        state.singleList = singleList;
    },
    [TYPES.SET_PAGE_SIZE](state: AppState, pageSize: number): void {
        state.pageSize = pageSize;
    },
    [TYPES.GET_LIST](state: AppState, list: SingleList[]): void {
        state.list = list;
    }

}
export default mutations
