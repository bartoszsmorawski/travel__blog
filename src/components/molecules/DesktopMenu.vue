<template>
  <nav>
    <ul class="menu">
      <li><a href="#">STRONA GÓWNA</a></li>
      <li class="has-submenu">
        <a href="#"> KRAJE I MIEJSCA
          <div class="chevronDownUp">
            <ChevronDown class="down" color="#4A4A4A" :size="15" />
            <ChevronUp class="up" color="#4A4A4A" :size="15" />
          </div>
        </a>
        <ul class="submenu">
          <li><a href="#">Austria</a></li>
          <li><a href="#">Chorwacja</a></li>
          <li><a href="#">Cypr</a></li>
          <li><a href="#">Francja</a></li>
          <li><a href="#">Grecja</a></li>
          <li><a href="#">Hiszpania</a></li>
          <li><a href="#">Holandia</a></li>
          <li><a href="#">Indie</a></li>
          <li><a href="#">Indonezja</a></li>
          <li><a href="#">Katar</a></li>
          <li><a href="#">Korea Poludniowa</a></li>
          <li><a href="#">Malta</a></li>
          <li><a href="#">Polska</a></li>
          <li><a href="#">Szwajcaria</a></li>
          <li><a href="#">Tajlandia</a></li>
          <li><a href="#">Tanzania i Zanzibar</a></li>
          <li><a href="#">Stany Zjednoczone</a></li>
          <li><a href="#">Wielka Brytania</a></li>
          <li><a href="#">Wietnam</a></li>
          <li><a href="#">Wochy</a></li>
        </ul>
      </li>
      <li class="has-submenu">
        <a href="#">BLOG
          <div class="chevronDownUp">
            <ChevronDown class="down" color="#4A4A4A" :size="15" />
            <ChevronUp class="up" color="#4A4A4A" :size="15" />
          </div>
        </a>
        <ul class="submenu">
          <li><a href="#">Wszystkie kraje i miejsca</a></li>
          <li><a href="#">Podróżnicze poradniki</a></li>
          <li><a href="#">Blogi z podróży</a></li>
          <li><a href="#">Co warto zobaczyc</a></li>
          <li><a href="#">Jak zorganizowac wyjazd</a></li>
          <li><a href="#">O podróżach ogólnie</a></li>
          <li><a href="#">Porównywarki cen</a></li>
          <li><a href="#">Sprzęt w podróży</a></li>
        </ul>
      </li>
      <li class="has-submenu">
        <a href="#">O NAS
          <div class="chevronDownUp">
            <ChevronDown class="down" color="#4A4A4A" :size="15" />
            <ChevronUp class="up" color="#4A4A4A" :size="15" />
          </div>
        </a>
        <ul class="submenu">
          <li><a href="#">Kontakt</a></li>
          <li><a href="#">Wspópraca</a></li>
          <li><a href="#">Nasz YouTube</a></li>
          <li><a href="#">O nas</a></li>
          <li><a href="#">Nasze linki</a></li>
        </ul>
      </li>
      <li><a href="#">WYCIECZKI</a></li>
      <li><a href="#">SKLEP</a></li>
      <li>
        <SearchInput />
      </li>
    </ul>
  </nav>

</template>
<script setup>
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import SearchInput from './SearchInput.vue';
</script>
<style scoped>
/* Podstawowy styl nawigacji */
nav {
  background-color: #eee;
  padding: 0;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.menu>li {
  position: relative;
}

.menu>li>a {
  display: flex;
  color: #4A4A4A;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  align-items: center;
  gap: 10px;
}

.menu>li:hover {
  background-color: #555;
}

.chevronDownUp {
  align-items: center;
}

/* Styl podmenu */
.submenu {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #4444447a;
  display: none;
  max-height: 80vh;
  overflow-y: scroll;
  /* Ukryte domyślnie */
}

.submenu li {
  width: 200px;
}

.submenu li a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px;
}

.submenu li a:hover {
  background-color: #666;
}

/* Wyświetlenie podmenu na hover */
.has-submenu:hover .submenu {
  display: block;
}

.up {
  display: none;
}

.menu li:hover .up {
  display: block;
}

.menu li:hover .down {
  display: none;
}
</style>