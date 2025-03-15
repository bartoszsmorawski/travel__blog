import HomeView from '../pages/HomeView.vue';
import CountriesView from '../pages/CountriesView.vue';
import CountriesArticleView from '../pages/CountriesArticleView.vue';
import BlogView from '../pages/BlogView.vue';
import AboutUsView from '../pages/AboutUsView.vue';
import TravelView from '../pages/TravelView.vue';
import ShopView from '../pages/ShopView.vue';

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/wycieczki', component: TravelView },
	{ path: '/sklep', component: ShopView },
	{ path: '/kraje', component: CountriesView },
	{ path: '/npAustria', component: CountriesArticleView },
	{ path: '/blog', component: BlogView },
	{ path: '/kraje', component: CountriesView },
	{ path: '/onas', component: AboutUsView },

];

export function getRoutes() {
	return routes;
}
