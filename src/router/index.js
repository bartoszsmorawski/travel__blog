import { createMemoryHistory, createRouter } from 'vue-router';
import {getRoutes} from './routes';

const routes = getRoutes();
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;