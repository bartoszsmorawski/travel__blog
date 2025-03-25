import HomeView from '../pages/HomeView.vue';
import CountriesView from '../pages/CountriesView.vue';
import CountryView from '../pages/CountryView.vue';
// import CountriesArticleView from '../pages/CountriesArticleView.vue';
import BlogView from '../pages/BlogView.vue';
import AboutUsView from '../pages/AboutUsView.vue';
import TravelView from '../pages/TravelView.vue';
import ShopView from '../pages/ShopView.vue';

const routes = [
	{ path: '/', component: HomeView, meta: { title: 'Strona główna' } },
	{ path: '/wycieczki', component: TravelView, meta: { title: 'Wycieczki' } },
	{ path: '/sklep', component: ShopView, meta: { title: 'Sklep' } },
	{ path: '/kraje', component: CountriesView,  meta: { title: 'Kraje' } },
	{ path: '/kraje/:country', component: CountryView},
	{ path: '/blog', component: BlogView, meta: { title: 'Blog' } },
	{ path: '/onas', component: AboutUsView, meta: { title: 'O nas' } },
];



export function getRoutes() {
	return routes;
}
