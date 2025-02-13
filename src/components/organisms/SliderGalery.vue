<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="@/assets/image/grece.jpg" alt="Slide 1">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/image/rome.jpg" alt="Slide 2">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/image/maledives.jpg" alt="Slide 3">
      </div>
    </div>
    <!-- Paginacja i nawigacja -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script setup>
import { Swiper } from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import { onMounted } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

onMounted(() => {
  new Swiper('.swiper-container', {
    modules: [Pagination, Navigation], // Dodajemy moduły
    slidesPerView: 1, // Pojedynczy slajd na ekranie
    spaceBetween: 10,
    loop: true, // Zapętlenie
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
</script>

<style scoped>
.swiper-container {
  width: 100%;
  max-width: 1200px; /* Maksymalna szerokość */
  height: 500px; /* Ustaw wysokość */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Dopasowanie do kontenera */
}

.swiper-slide img {
  width: 100%; /* Dopasowanie szerokości */
  height: 100%; /* Dopasowanie wysokości */
  object-fit: cover; /* Przycięcie obrazu, aby pasował */
}

@media (max-width: 768px) {
  .swiper-container {
    height: 300px; /* Mniejsza wysokość na telefonach */
  }
}

</style>

