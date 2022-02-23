import { SingleList, TYPES } from "@/store/modules/app/types";
import { Store, useStore } from "vuex";
import { ComponentInternalInstance, computed, ComputedRef, getCurrentInstance } from "vue";
import { useAppConfig } from "@/hooks/core";

interface UseList {
    getSingleList(): void;
    getImageUrl(path: string, id: string): string;
    handleCurrentChange(pageIndex: number): void;
}
export const useList = (): UseList => {
    const store: Store<any> = useStore();
    const baseUrl = useAppConfig<string>('baseUrl');

    const getSingleList = (): void => {
        const pageIndex: number = store.state.app.pageIndex;
        const singleList: SingleList = store.state.app.list.find((item: SingleList) => item.pageIndex === pageIndex)
        store.dispatch(`app/${TYPES.SET_SINGLE_LIST}`, singleList)
    }

    const getImageUrl = (path: string, id: string): string => {
        return baseUrl + path + id + '.png'
    }

    const handleCurrentChange = (pageIndex: number): void => {
        store.dispatch(`app/${TYPES.SET_PAGE_INDEX}`, pageIndex - 1)
        getSingleList();
    }



    return {
        getSingleList,
        getImageUrl,
        handleCurrentChange
    }
}
