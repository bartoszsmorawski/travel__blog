<template>
  <div class="sale-travel-section">
    <section class="hero">
    <p>Wspólna wyprawa na podbój Afryki</p>
    <h1>Wybierz się na przygodę życia <br>z parą YouTuberów na pokładzie!</h1>
    <button>Dołącz teraz!</button>
  </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
.sale-travel-section {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #fffc00;
  /* Żółte tło */
  color: #111;
  /* Ciemny tekst */
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 2rem;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  margin: 1rem 0;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero button {
  background-color: #111;
  color: #fffc00;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hero button:hover {
  background-color: #333;
}

@media (min-width: 768px) {
  .hero h1 {
    font-size: 4rem;
  }
}
</style>