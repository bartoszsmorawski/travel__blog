import { createWebHistory, createRouter } from 'vue-router';
import { getRoutes } from './routes';

const routes = getRoutes();
const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const country = to.params.country;
  document.title = country ? country : to.meta.title || 'Pocztówka z świata';
  next();
});

export default router;
