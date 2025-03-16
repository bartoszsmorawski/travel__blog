<template>
  <nav>
    <ul class="menu">
      <li><router-link to="/"><img class="logo" src="@/assets/image/logo-pocztówka-white.png"></router-link></li>
      <li class="has-submenu">
        <span> KRAJE I MIEJSCA
          <div class="chevronDownUp">
            <ChevronDown class="down" color="#F5F5F4" :size="15" />
            <ChevronUp class="up" color="#F5F5F4" :size="15" />
          </div>
        </span>
        <ul class="submenu">
          <li><router-link to="/npAustria">Austria</router-link></li>
          <li><router-link to="/npAustria">Chorwacja</router-link></li>
          <li><router-link to="/npAustria">Cypr</router-link></li>
          <li><router-link to="/npAustria">Francja</router-link></li>
          <li><router-link to="/npAustria">Grecja</router-link></li>
          <li><router-link to="/npAustria">Hiszpania</router-link></li>
          <li><router-link to="/npAustria">Holandia</router-link></li>
          <li><router-link to="/npAustria">Indie</router-link></li>
          <li><router-link to="/npAustria">Indonezja</router-link></li>
          <li><router-link to="/npAustria">Katar</router-link></li>
          <li><router-link to="/npAustria">Korea Poludniowa</router-link></li>
          <li><router-link to="/npAustria">Malta</router-link></li>
          <li><router-link to="/npAustria">Polska</router-link></li>
          <li><router-link to="/npAustria">Szwajcaria</router-link></li>
          <li><router-link to="/npAustria">Tajlandia</router-link></li>
          <li><router-link to="/npAustria">Tanzania i Zanzibar</router-link></li>
          <li><router-link to="/npAustria">Stany Zjednoczone</router-link></li>
          <li><router-link to="/npAustria">Wielka Brytania</router-link></li>
          <li><router-link to="/npAustria">Wietnam</router-link></li>
          <li><router-link to="/npAustria">Wochy</router-link></li>
        </ul>
      </li>
      <li class="has-submenu">
        <span>BLOG
          <div class="chevronDownUp">
            <ChevronDown class="down" color="#F5F5F4" :size="15" />
            <ChevronUp class="up" color="#F5F5F4" :size="15" />
          </div>
        </span>
        <ul class="submenu">
          <li><router-link to="/kraje">Wszystkie kraje i miejsca</router-link></li>
          <li><a href="#">Podróżnicze poradniki</a></li>
          <li><a href="#">Blogi z podróży</a></li>
          <li><a href="#">Co warto zobaczyc</a></li>
          <li><a href="#">Jak zorganizowac wyjazd</a></li>
          <li><a href="#">O podróżach ogólnie</a></li>
          <li><a href="#">Porównywarki cen</a></li>
          <li><a href="#">Sprzęt w podróży</a></li>
        </ul>
      </li>
      <li> <router-link to="/onas">O NAS</router-link> </li>
      <li> <router-link to="/wycieczki">WYCIECZKI </router-link></li>
      <li> <router-link to="/sklep">SKLEP </router-link></li>
      <li>
        <SearchInput />
      </li>
    </ul>
  </nav>

</template>
<script setup>
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import SearchInput from './SearchInput.vue';


defineProps({
  backgroundgcColor: {
    type: String,
    default: "#00000010"
  },
});
</script>
<style scoped>
nav {
  background-color: v-bind(backgroundgcColor);
  position: fixed;
  z-index: 10;
  justify-content: space-between;
  width: 100%;
  top: 0;
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
  display: flex;
  color: #F5F5F4;
  position: relative;
}

.menu>li>a,
.menu>li>span {
  display: flex;
  color: #F5F5F4;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  align-items: center;
  gap: 10px;
}

.menu>li:hover {
  background-color: #555;
}

.menu>li:first-child:hover {
  background-color: unset;
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

.logo {
  max-width: 250px;

}
</style>