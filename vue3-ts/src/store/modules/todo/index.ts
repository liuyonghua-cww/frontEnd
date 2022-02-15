import { state } from "@/store/modules/todo/state";
import { mutations } from "@/store/modules/todo/mutations";
import { actions } from "@/store/modules/todo/actions";
import { Module } from 'vuex';
import { ITodoState } from "@/store/modules/todo/types";


class TodoModule implements Module<ITodoState, any> {
    namespaced: boolean = true;
    state = state;
    mutations = mutations;
    actions = actions;
}

console.log(new TodoModule());
export default new TodoModule();
