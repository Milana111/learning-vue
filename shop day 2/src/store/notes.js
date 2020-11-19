export default {
    state: {
        notes: [
            {
                title: 'The First Note',
                description: 'The First Note Description',
                priority: 'High',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'The Second Note',
                description: 'The Second Note Description',
                priority: 'Very High',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'The Third Note',
                description: 'The Third Note Description',
                priority: 'Standard',
                date: new Date(Date.now()).toLocaleString()
            }
        ],
    },
    mutations: {
        addNote(state, payload) {
            state.notes.push(payload)
        },
        removeNote(state, payload) {
            state.notes.splice(payload, 1)
          },
    },
    actions: {
        addNote({commit}, payload) {
            commit('addNote', payload)
        },
        removeNote({commit}, payload) {
            commit('removeNote', payload)
          },
    },
    getters: {
        getNotes(state) {
            return state.notes
        }
    }
}