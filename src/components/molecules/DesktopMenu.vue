// Ten plik odpowiada za wygląd oraz treść jaka sie znajduje w menu (navBarze) na zwyklych monitorach.

<template>
  <nav ref="statickNav">
    <ul class="menu">
      <li><router-link to="/"><img class="logo" src="@/assets/image/logo-pocztówka-white.png"></router-link></li>
      <li class="has-submenu">
        <span> KRAJE I MIEJSCA
          <div class="chevronDownUp">
            <ChevronDown class="down" color="#F5F5F4" :size="15" />
            <ChevronUp class="up" color="#F5F5F4" :size="15" />
          </div>
        </span>
        <div class="submenu-container">
          <ul class="submenu">
            <li><router-link to="/kraje/Austria">Austria</router-link></li>
            <li><router-link to="/kraje/Chorwacja">Chorwacja</router-link></li>
            <li><router-link to="/kraje/Cypr">Cypr</router-link></li>
            <li><router-link to="/kraje/Francja">Francja</router-link></li>
            <li><router-link to="/kraje/Grecja">Grecja</router-link></li>
            <li><router-link to="/kraje/Hiszpania">Hiszpania</router-link></li>
            <li><router-link to="/kraje/Holandia">Holandia</router-link></li>
            <li><router-link to="/kraje/Indie">Indie</router-link></li>
            <li><router-link to="/kraje/Indonezja">Indonezja</router-link></li>
            <li><router-link to="/kraje/Katar">Katar</router-link></li>
            <li><router-link to="/kraje/Korea-Poludniowa">Korea Poludniowa</router-link></li>
            <li><router-link to="/kraje/Malta">Malta</router-link></li>
            <li><router-link to="/kraje/Polska">Polska</router-link></li>
            <li><router-link to="/kraje/Szwajcaria">Szwajcaria</router-link></li>
            <li><router-link to="/kraje/Tajlandia">Tajlandia</router-link></li>
            <li><router-link to="/kraje/Tanzania-i-Zanzibar">Tanzania i Zanzibar</router-link></li>
            <li><router-link to="/kraje/Stany-Zjednoczone">Stany Zjednoczone</router-link></li>
            <li><router-link to="/kraje/Wielka-Brytania">Wielka Brytania</router-link></li>
            <li><router-link to="/kraje/Wietnam">Wietnam</router-link></li>
            <li><router-link to="/kraje/Wochy">Wochy</router-link></li>
          </ul>
        </div>
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

  <nav class="sticky-menu hidden" ref="stickyNav">
    <ul class="menu">
      <li><router-link to="/"><img class="logo" src="@/assets/image/logo-pocztówka-white.png"></router-link></li>
      <li class="has-submenu">
        <span> KRAJE I MIEJSCA
          <div class="chevronDownUp">
            <ChevronDown class="down" color="#F5F5F4" :size="15" />
            <ChevronUp class="up" color="#F5F5F4" :size="15" />
          </div>
        </span>
        <div class="submenu-container">
          <ul class="submenu">
            <li><router-link to="/kraje/Austria">Austria</router-link></li>
            <li><router-link to="/kraje/Chorwacja">Chorwacja</router-link></li>
            <li><router-link to="/kraje/Cypr">Cypr</router-link></li>
            <li><router-link to="/kraje/Francja">Francja</router-link></li>
            <li><router-link to="/kraje/Grecja">Grecja</router-link></li>
            <li><router-link to="/kraje/Hiszpania">Hiszpania</router-link></li>
            <li><router-link to="/kraje/Holandia">Holandia</router-link></li>
            <li><router-link to="/kraje/Indie">Indie</router-link></li>
            <li><router-link to="/kraje/Indonezja">Indonezja</router-link></li>
            <li><router-link to="/kraje/Katar">Katar</router-link></li>
            <li><router-link to="/kraje/Korea-Poludniowa">Korea Poludniowa</router-link></li>
            <li><router-link to="/kraje/Malta">Malta</router-link></li>
            <li><router-link to="/kraje/Polska">Polska</router-link></li>
            <li><router-link to="/kraje/Szwajcaria">Szwajcaria</router-link></li>
            <li><router-link to="/kraje/Tajlandia">Tajlandia</router-link></li>
            <li><router-link to="/kraje/Tanzania-i-Zanzibar">Tanzania i Zanzibar</router-link></li>
            <li><router-link to="/kraje/Stany-Zjednoczone">Stany Zjednoczone</router-link></li>
            <li><router-link to="/kraje/Wielka-Brytania">Wielka Brytania</router-link></li>
            <li><router-link to="/kraje/Wietnam">Wietnam</router-link></li>
            <li><router-link to="/kraje/Wochy">Wochy</router-link></li>
          </ul>
        </div>
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
import { onMounted, ref } from 'vue';

import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import SearchInput from './SearchInput.vue';

const statickNav = ref(null);
const stickyNav = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stickyNav.value.classList.add('hidden')
      } else {
        stickyNav.value.classList.remove('hidden')
      } 
    });
  });

  observer.observe(statickNav.value)
})

defineProps({
  backgroundgcColor: {
    type: String,
    default: "#000000"
  },
});
</script>
<style scoped>
nav {
  position: absolute;
  top: 0;
  background-color: v-bind(backgroundgcColor);
  z-index: 10;
  justify-content: space-between;
  width: 100%;
  padding: 0;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.sticky-menu {
  position: fixed;
  background-color: #fff!important;
  box-shadow: 0 4px 10px #0000004d;
  transform: translateY(0%);
  transition: all 0.2s ease-in;
}

.sticky-menu.hidden {
  transform: translateY(-100%);
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

.submenu-container {
  max-height: 200px;
  overflow: hidden;
}

.submenu {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #4444447a;
  display: none;
  max-height: 250px;
  overflow-y: scroll;
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