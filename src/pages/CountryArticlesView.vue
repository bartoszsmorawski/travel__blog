<template>
  <TravelNavbar backgroundgcColor="#4A4A4A" />
  <div class="article-page">
    <h1 class="title">- Porozmawiajmy o krajach: {{ route.params.country }} -</h1>
    <h2 class="subTitle">Czyli co warto wiedzieć o tym kraju ?</h2>
    <div class="article-info">
      <BasicInformationCountry />
    </div>
    <div v-if="articlesForCountry.length">
      <ArticleTeaserBorder v-for="country in articlesForCountry" :key="country.id" :title="country.title" content=""
        :imageSrc="country.imageLink" />
    </div>
    <div v-else>
      <p>Brak artykułów dotyczących tego kraju.</p>
    </div>
  </div>
</template>

<script setup>
import TravelNavbar from '@/components/organisms/TravelNavbar.vue';
import BasicInformationCountry from '@/components/organisms/BasicInformationCountry.vue';
import { computed } from 'vue';

import { useRoute } from 'vue-router';
const route = useRoute();

import { useArticles } from "@/comosables/useArticles";
import ArticleTeaserBorder from '@/components/organisms/ArticleTeasers/ArticleTeaserBorder.vue';
const { getArticlesByCountry } = useArticles();

const articlesForCountry = computed(() => getArticlesByCountry(route.params.country).value);
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


.article-img {
  width: 30%;
  border-radius: 8px;
}



.read-more {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
}

.article-info {
  padding: 16px;
}
</style>