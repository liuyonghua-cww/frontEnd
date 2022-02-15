import { ITodoActions, TODO_TYPE, AugmentedActionContext, ITodoItem, TODO_ITEM_STATUS, ITodoState} from "@/store/modules/todo/types";
import { ActionTree} from 'vuex'
export const actions: ITodoActions & ActionTree<ITodoState, any> = {
    [TODO_TYPE.ADD_TODO]({commit}: AugmentedActionContext, todoItem: ITodoItem): void {
        commit(TODO_TYPE.ADD_TODO, todoItem)
    },

    [TODO_TYPE.REMOVE_TODO]({commit}: AugmentedActionContext, id: number): void {
        commit(TODO_TYPE.REMOVE_TODO, id)
    },

    [TODO_TYPE.SET_TODO_LIST]({commit}: AugmentedActionContext, todoList: ITodoItem[]): void {
        commit(TODO_TYPE.SET_TODO_LIST, todoList)
    },

    [TODO_TYPE.SET_TODO_STATUS]({commit}: AugmentedActionContext, data: { id: number; status: TODO_ITEM_STATUS }): void {
        commit(TODO_TYPE.SET_TODO_STATUS, data)
    }

}
