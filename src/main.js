import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

createApp(App).use(router).mount('#app');

document.addEventListener('DOMContentLoaded', () => {
	const elementsToObservate = document.querySelectorAll('.animate');

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('active');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	elementsToObservate.forEach(el => observer.observe(el));
});
