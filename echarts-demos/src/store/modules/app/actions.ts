import { Actions, AppState, AugmentedActionContext, SingleList, TYPES } from "@/store/modules/app/types";
import axios from "axios";
import { ActionTree } from "vuex";

const actions: Actions & ActionTree<AppState, any> = {
    [TYPES.SET_SINGLE_LIST]({commit}: AugmentedActionContext, singleList: SingleList): void {
        commit(TYPES.SET_SINGLE_LIST, singleList);
    },
    async [TYPES.GET_LIST]({commit}: AugmentedActionContext): Promise<void> {
        // 获取数据
        const {data}: { data: SingleList[] } = await axios.get('./get-list/echartsList.json');
        commit(TYPES.SET_PAGE_COUNT, data.length);
        commit(TYPES.GET_LIST, data);
    },
    [TYPES.SET_PAGE_INDEX]({commit}: AugmentedActionContext, pageIndex: number): void {
        commit(TYPES.SET_PAGE_INDEX, pageIndex);
    },
    async [TYPES.GET_ECHARTS_OPTION]({commit, state}: AugmentedActionContext, params: {path: string, id: string}): Promise<void> {
        const data = await axios.get(params.path + params.id + '.txt')
        const echartsOption = data.data + ';return option;'
        commit(TYPES.GET_ECHARTS_OPTION, echartsOption);
    }

}
export default actions;
