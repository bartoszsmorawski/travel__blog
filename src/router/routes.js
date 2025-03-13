import HomeView from "../pages/HomeView.vue";
import CountriesView from "../pages/CountriesView.vue";

const routes = [
  { path: '/', component: HomeView},
  { path: '/kraje', component: CountriesView},
]

export function getRoutes() {
  return routes;
}