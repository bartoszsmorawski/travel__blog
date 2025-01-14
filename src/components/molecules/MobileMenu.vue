<template>
  <div class="MobileNavbar">
    <button class="hamburger" @click="() => isOpen = !isOpen">
      <AlignJustify v-if="!isOpen" color="white" :size="35" />
      <X v-else color="white" :size="35" />
    </button>
    <Transition>
      <nav v-if="isOpen">
        <ul class="menu">
          <li class="menuItems"><a href="#">STRONA GÓWNA</a></li>
          <li class="has-submenu menuItems">
            <a href="#" @click="() => isOpenSubMenu = !isOpenSubMenu"> KRAJE I MIEJSCA
              <div class="chevronDownUp">
                <ChevronDown v-if="!isOpenSubMenu" color="white" :size="25" />
                <ChevronUp v-else color="white" :size="25" />
              </div>
            </a>
            <!-- TODO BACK HEAR: CREATE COMPONENT FOR SUBMENU ITEMS. -->
            <ul v-if="isOpenSubMenu" class="submenu">
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
              <li><a href="#">USA-Stany Zjednoczone Ameryki</a></li>
              <li><a href="#">Wielka Brytania</a></li>
              <li><a href="#">Wietnam</a></li>
              <li><a href="#">Wochy</a></li>
            </ul>
          </li>
          <li class="has-submenu menuItems">
            <a href="#" @click="() => isOpenSubMenu1 = !isOpenSubMenu1">BLOG
              <div class="chevronDownUp">
                <ChevronDown v-if="!isOpenSubMenu1" color="white" :size="25" />
                <ChevronUp v-else color="white" :size="25" />
              </div>
            </a>
            <ul v-if="isOpenSubMenu1" class="submenu">
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
          <li class="has-submenu menuItems">
            <a href="#" @click="() => isOpenSubMenu2 = !isOpenSubMenu2">O NAS
              <div class="chevronDownUp">
                <ChevronDown v-if="!isOpenSubMenu2" color="white" :size="25" />
                <ChevronUp v-else color="white" :size="25" />
              </div>
            </a>
            <ul v-if="isOpenSubMenu2" class="submenu">
              <li><a href="#">Kontakt</a></li>
              <li><a href="#">Wspópraca</a></li>
              <li><a href="#">Nasz YouTube</a></li>
              <li><a href="#">O nas</a></li>
              <li><a href="#">Nasze linki</a></li>
            </ul>
          </li>
          <li class="menuItems"><a href="#">WYCIECZKI</a></li>
          <li class="menuItems"><a href="#">SKLEP</a></li>
        </ul>
      </nav>
    </Transition>
    <div class="SearchInput">
      <SearchInput :iconSize="30" />
    </div>
  </div>
</template>
<script setup>
import { AlignJustify, X, ChevronDown, ChevronUp } from 'lucide-vue-next';
import { ref } from "vue"
import SearchInput from './SearchInput.vue';
const isOpen = ref(false)
const isOpenSubMenu = ref(false)
const isOpenSubMenu1 = ref(false)
const isOpenSubMenu2 = ref(false)
</script>
<style scoped>
.hamburger {
  border: none;
  background-color: #000000;
}

.chevronDownUp {
  align-items: center;
}

nav {
  padding: 0px;

}

li {
  list-style: none;
  margin: 7px 0px;
}

a {
  color: #fff;
  text-decoration: none;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
}

ul {
  margin: 0px;
  padding: 0px;
}

li a:hover {
  background-color: #666;
}

.MobileNavbar {
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 20px;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>