import { createStore } from "vuex";

export default createStore({
	state: {
		user: {
			id: "",
			username: "",
		},
		isAuthenticated: false,
		token: "",
	},
	getters: {},
	mutations: {
		initializeStore(state) {
			if (localStorage.getItem("token")) {
				state.token = localStorage.getItem("token");
				state.isAuthenticated = true;
				state.user.username = localStorage.getItem("username");
				state.user.username = localStorage.getItem("userid");
			} else {
				state.user.id = "";
				state.user.username = "";
				state.token = "";
				state.isAuthenticated = false;
			}
		},
		setToken(state, token) {
			state.token = token;
			state.isAuthenticated = true;
		},
		removeToken(state, token) {
			state.user.id = "";
			state.user.username = "";
			state.token = "";
			state.isAuthenticated = false;
		},
		setUser(state, user) {
			state.user = user;
		},
	},
	actions: {},
	modules: {},
});
