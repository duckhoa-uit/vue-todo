import { createStore } from 'vuex';
import todos from './modules/todos';
import account from './modules/account';

/** Global store */
const state = {
	error: {},
};

const getters = {
	getError: (state) => state.error,
	// getCompletedTodos: state => state.todos.filter(todo => todo.isComplete)
};

const actions = {};

const mutations = {
	setError: (state, error) => (state.error = error),
};
// this.$store.commit('setError', {});

const store = createStore({
	state,
	getters,
	actions,
	mutations,
	modules: {
		todos,
		account,
	},
});

// Create Store
export default store;
