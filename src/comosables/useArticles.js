// W tym pliku pobierają się nowe artykuly z api i przypisują je do widgetów. Dzięki tej części kodu każdy nowy artykuł widać na stronie i przypsuje się do danego kraju. 

import { onMounted, ref, computed } from 'vue';

export function useArticles() {
	const articles = ref([]);

	onMounted(async () => {
		try {
			const reponse = await fetch('http://localhost:8080/api/articles.json');
			if (!reponse) throw new Error('Błąd pobierania danych');
			const data = await reponse.json();
			articles.value = data.data;
		} catch (error) {
			console.log(error);
		}
	});

	//wszysttkie artykuły
	const getAllArticles = computed(() => articles.value);

	//Ostatnie 6 artykułów
	const getLatestArticles = computed(() => {
		return articles.value.slice(-6).reverse();
	});

	//względem kraju
	const getArticlesByCountry = country => {
		return computed(() => {
			return articles.value.filter(article => article.country.toLowerCase() === country.toLowerCase());
		});
	};

	//po id artukułu
	const getArticleById = id => {
		return computed(() => {
			return articles.value.find(article => article.id === id);
		});
	};

	return {
		getAllArticles,
		getLatestArticles,
		getArticlesByCountry,
		getArticleById,
	};
}
