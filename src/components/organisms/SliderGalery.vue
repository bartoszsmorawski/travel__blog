<template>
  <div class="swiper-container swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="@/assets/image/grecja.png" alt="Slide 1">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/image/rzym.png" alt="Slide 2">
      </div>
      <div class="swiper-slide">
        <img src="@/assets/image/malediwy.png" alt="Slide 3">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>
import { Swiper } from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import { onMounted } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

onMounted(() => {
  new Swiper('.swiper-container', {
    modules: [Pagination, Autoplay], 
    slidesPerView: 1, 
    spaceBetween: 10,
    loop: true, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 10000, 
      disableOnInteraction: false, 
    },
  });
});
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 700px; 
  z-index: 1;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
}

.swiper-slide img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

@media (max-width: 768px) {
  .swiper-container {
    height: 400px; 
  }
}
</style>
