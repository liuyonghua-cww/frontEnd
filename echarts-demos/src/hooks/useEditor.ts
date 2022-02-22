import { Store, useStore } from "vuex";
import { ComponentInternalInstance, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

interface UseEditor {
    getOption(): Promise<string>;
}

export const useEditor = (): UseEditor => {
    const store: Store<any> = useStore();
    const route = useRoute();
    const getOption = async (): Promise<string> => {
        const {data: option}: { data: string } = await axios.get(store.state.app.singleList.path + route.query.id + '.txt')
        return option
    };

    return {
        getOption
    }
}
