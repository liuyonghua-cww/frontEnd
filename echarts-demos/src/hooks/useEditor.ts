import { Store, useStore } from "vuex";
import { useRoute } from "vue-router";
import axios from "axios";
import { SingleList, TYPES } from "@/store/modules/app/types";

interface UseEditor {
    getOption(): Promise<void>;
}

export const useEditor = (): UseEditor => {
    const store: Store<any> = useStore();
    const { query } = useRoute();
    const getOption = async (): Promise<void> => {
        await store.dispatch(`app/${TYPES.GET_ECHARTS_OPTION}`, { id: query.id, path: query.path })
    };

    return {
        getOption
    }
}
