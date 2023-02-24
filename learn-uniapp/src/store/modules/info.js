const state = {
    name: '',
    phoneNumber: ''
}
const mutations = {
    setUserName(state, info) {
        state.name = info
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
