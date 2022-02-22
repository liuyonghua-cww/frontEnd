import state from "@/store/modules/app/state";
import mutations from './mutations'
import actions from "@/store/modules/app/actions";
import { AppState } from "@/store/modules/app/types";
import {Module} from 'vuex'
const module: Module<AppState, any> = {
    namespaced: true,
    state,
    mutations,
    actions
}
export default module;
