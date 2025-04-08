<template>
  <TravelNavbar />
  <router-view />
  <FooterSection title="Zostańmy w kontakcie" subTitle="Blog Podróżniczy- zaplanuj z nami wakacje !" />
</template>

<script setup>
import TravelNavbar from "@/components/organisms/TravelNavbar.vue";
import FooterSection from "@/components/organisms/FooterSection.vue";
import "@fontsource/lato";
</script>

<style>
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background:  #FFFFFF;
  margin: 0px;
}

::-webkit-scrollbar-track {
  width: 2px;
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 2px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  width: 2px;
  background-color: #323232;
}
</style>
