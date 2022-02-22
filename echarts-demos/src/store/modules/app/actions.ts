import { Actions, AugmentedActionContext, TYPES, SingleList, AppState } from "@/store/modules/app/types";
import axios from "axios";
import { ActionTree } from "vuex";

const actions: Actions & ActionTree<AppState, any> = {
    [TYPES.SET_SINGLE_LIST]({commit}: AugmentedActionContext, singleList: SingleList): void {
        commit(TYPES.SET_SINGLE_LIST, singleList);
    },
    async [TYPES.GET_LIST]({commit}: AugmentedActionContext): Promise<void> {
        // 获取数据
        const {data}: {data: SingleList[]} = await axios.get('./get-list/echartsList.json');
        commit(TYPES.SET_PAGE_SIZE, data.length);
        commit(TYPES.GET_LIST, data);
    }

}
export default actions;
