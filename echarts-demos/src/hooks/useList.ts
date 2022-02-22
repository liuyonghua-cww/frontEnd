import { SingleList, TYPES } from "@/store/modules/app/types";
import { Store, useStore } from "vuex";

interface UseList {
    getSingleList(): void;
}
export const useList = (): UseList => {
    const store: Store<any> = useStore();
    const getSingleList = (): void => {
        const pageIndex: number = store.state.app.pageIndex;
        const singleList: SingleList = store.state.app.list.find((item: SingleList) => item.pageIndex === pageIndex)
        store.dispatch(`app/${TYPES.SET_SINGLE_LIST}`, singleList)
    }

    return {
        getSingleList
    }
}
