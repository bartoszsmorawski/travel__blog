//W tym pliku znajdują się sekcje zdjęcia linki i informacje dotyczące podstrony "Wycieczki". 

<template>
  <div class="article-page">
    <h1 class="title">- Kraje i miejsca -</h1>
    <h2 class="subTitle">Czyli dlaczego warto zwiedzać świat ?</h2>
  </div>
  <ThreeColumnsPhotosBanner />
  <SaleBigBaner />
</template>

<script setup>
import SaleBigBaner from '@/components/organisms/SaleBigBaner.vue';
import ThreeColumnsPhotosBanner from '@/components/organisms/ThreeColumnsPhotosBanner.vue';
</script>
<style scoped>
.article-page {
  margin-top: 80px;
  padding-left: 60px;
  padding-right: 60px;
}

.title {
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-top: 150px;
  margin-bottom: 10px;
}

.subTitle {
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  margin-top: 15px;
}
</style>