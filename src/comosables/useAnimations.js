//Dzięki tej funkcji zawartej w tym pliku możemy podstawiać różne animacje. Trzeba używać klasy "animate" przed aby działały inne znajdujące się w animation.css


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