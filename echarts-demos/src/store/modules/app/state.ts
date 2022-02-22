import { AppState } from './types'

const state: AppState = {
    list: [],
    pageIndex: 0,
    pageCount: 0,
    singleList: {
        pageIndex: 0,
        ids: [],
        path: '',
    }
}

export default state;
