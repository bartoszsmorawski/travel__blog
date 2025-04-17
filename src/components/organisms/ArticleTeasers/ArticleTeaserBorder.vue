//Ten plik to jedna z sekcji, które po kliknieciu przenoszą do artykułu. W tym przypadku obrazek znajduje sie po lewej, ma tytuł opis, oraz link przenoszący do artykułu. 

<template>
  <div class="article-container">
    <img class="article-img" :src="imageSrc">
    <div>
      <h3 class="article-title">{{ title }}</h3>
      <p class="article-content">{{ content }}</p>
      <a href="#" class="read-more">Czytaj dalej »</a>
    </div>
  </div>
</template>
<script setup>
defineProps({
  content: String,
  title: String,
  imageSrc: String
});
</script>
<style scoped>
.article-container {
  display: flex;
  align-items: center;
  gap: 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-top: 80px;
  margin-bottom: 20px;
}

.article-title {
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;
}

.article-content {
  font-size: 1rem;
  color: #333;
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
</style>
