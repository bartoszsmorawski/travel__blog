// Ten plik odpowiada za podstornę "Wszystkie kraje i miejsca". Scala sekcje, stworzone wyżej i podstawia im tekst, zdjęcia i komponenty.

<template>
  <div class="article-page">
    <h1 class="title">- Kraje i miejsca -</h1>
    <h2 class="subTitle">Czyli dlaczego warto zwiedzać świat ?</h2>
  </div>
  <LinksToArticle />
  <PaginationToPage />
</template>

<script setup>
import PaginationToPage from '@/components/molecules/PaginationToPage.vue';
import LinksToArticle from '@/components/organisms/LinksToArticle.vue';
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