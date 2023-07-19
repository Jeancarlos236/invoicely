import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Dashboard from "../views/dashboard/DashboardView.vue";
import MyAccount from "../views/dashboard/MyAccountView.vue";
import SignUp from "../views/SignUpView.vue";
import LogIn from "../views/LogInView.vue";
import Clients from "../views/dashboard/ClientsView.vue";
import Client from "../views/dashboard/ClientView.vue";
import AddClient from "../views/dashboard/AddClientView.vue";
import EditClient from "../views/dashboard/EditClientView.vue";
import EditTeam from "../views/dashboard/EditTeamView.vue";
import Invoices from "../views/dashboard/InvoicesView.vue";
import Invoice from "../views/dashboard/InvoiceView.vue";
import AddInvoice from "../views/dashboard/AddInvoiceView.vue";

import store from "../store";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/sign-up",
		name: "SignUp",
		component: SignUp,
	},
	{
		path: "/log-in",
		name: "LogIn",
		component: LogIn,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard,
		meta: {
			requireLogin: true,
		},
	},
	{
		path: "/dashboard/invoices",
		name: "Invoices",
		component: Invoices,
		meta: {
			requireLogin: true,
		},
	},
	{
		path: "/dashboard/invoices/:id",
		name: "Invoice",
		component: Invoice,
		meta: {
			requireLogin: true,
		},
	},
	{
		path: "/dashboard/invoices/add",
		name: "AddInvoice",
		component: AddInvoice,
		meta: {
			requireLogin: true,
		},
	},
	{
		path: "/dashboard/clients",
		name: "Clients",
		component: Clients,
		meta: {
			requireLogin: true,
		},
	},
	{
		path: "/dashboard/clients/add",
		name: "AddClient",
		component: AddClient,
		meta: {
			requireLogin: true,
		},
	},
	{
		path: "/dashboard/clients/:id",
		name: "Client",
		component: Client,
		meta: {
			requireLogin: true,
		},
	},
	{
		path: "/dashboard/clients/:id/edit",
		name: "EditClient",
		component: EditClient,
		meta: {
			requireLogin: true,
		},
	},
	{
		path: "/dashboard/my-account",
		name: "MyAccount",
		component: MyAccount,
		meta: {
			requireLogin: true,
		},
	},
	{
		path: "/dashboard/my-account/edit-team",
		name: "EditTeam",
		component: EditTeam,
		meta: {
			requireLogin: true,
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (
		to.matched.some((record) => record.meta.requireLogin) &&
		!store.state.isAuthenticated
	) {
		next("/log-in");
	} else {
		next();
	}
});

export default router;
