export default {
    state: {
        error: null
    },
    mutations: {
        setError (state, payload) {
            state.error = payload
        }
    },
    actions: {
        setError ({commit}, payload) {
            commit('setError', payload)
        }
    },
    getters: {
        getError (state) {
            return state.error
        }
    }
}