const state = {
    goods: [
        {
            id: 1,
            name: '苹果',
            quantity: 3
        },
        {
            id: 2,
            name: '香蕉',
            quantity: 5
        },
        {
            id: 3,
            name: '梨',
            quantity: 10
        },
    ]
}
const mutations = {
    incrementItemQuantity(state, {id, number}) {
        const goodsItem = state.goods.find(item => item.id === id);
        goodsItem.quantity += number
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
