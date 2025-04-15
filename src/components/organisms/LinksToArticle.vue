<template>
  <div class="article-position">
    <div class="article-container">
      <img class="article-img" src="@/assets/image/wpis1.jpg">
      <div>
        <h3 class="article-title">Atrakcje turystyczne Wiednia. Top 9 miejsc, które Cię zachwycą</h3>
        <p class="article-content">Wiedeń, co warto zobaczyć odwiedzając to miasto na weekend Wiedeń atrakcje
          turystyczne-
          czyli dzisiaj o tym co
          warto zobaczyć w Wiedniu, wybierając się tam na weekend. Wiedeń : stolica i jednocześnie największe miasto w
          Austrii. Liczące około 1.8 mln ludzi miasto jest jednym z najchętniej odwiedzanych miast w Europie. Centrum
          muzyki
          klasycznej : to tu tworzyli Mozart, Beethoven, Schubert i wielu innym wirtuozów. Wiedeń przez niektórych
          nazywany
          „Miastem Marzeń” bo...</p>
        <a href="#" class="read-more">Czytaj Więcej »</a>
      </div>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped>

.article-position{
  margin-top: 80px;
  padding-left: 60px;
  padding-right: 60px; 
}

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

.article-img {
  width: 30%;
  border-radius: 8px;
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

.read-more {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>