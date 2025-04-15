<template>
<section class="trip-section">
  <!-- Zdjęcie 1 -->
  <div class="trip-image image-left"></div>

  <!-- Środek z tekstem -->
  <div class="trip-content">
    <h2>Wspólna wyprawa do Afryki</h2>
    <h1>Odwiedź z nami Afrykę</h1>
    <p>Wspólna wyprawa na Kilimandżaro, safari, odwiedzimy zachód Tanzanii, zobaczyć szympansy i na koniec wpadamy na Zanzibar!</p>
    <a href="#cennik" class="trip-button">Zobacz ceny</a>
  </div>

  <!-- Zdjęcie 2 -->
  <div class="trip-image image-right"></div>
</section>

</template>

<script setup>

</script>
<style scoped>

.trip-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 400px;
}

.trip-image {
  background-size: cover;
  background-position: center;
}

.image-left {
  background-image: url('@/assets/image/Austria.jpg');
}

.image-right {
  background-image: url('@/assets/image/grece.jpg');
}

.trip-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('@/assets/image/morze.jpg');
  color: #fff;
  padding: 40px 20px;
}

.trip-content h2 {
  color: #facc15; /* żółty */
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.trip-content h1 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.trip-content p {
  max-width: 400px;
  margin-bottom: 20px;
}

.trip-button {
  background-color: #facc15;
  color: #000;
  font-weight: bold;
  padding: 10px 20px;
  text-decoration: none;
  transition: background 0.3s;
}

.trip-button:hover {
  background-color: #eab308;
}

</style>