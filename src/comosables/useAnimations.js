export function useAnimations() {
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
}