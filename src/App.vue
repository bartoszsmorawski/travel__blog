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
  background: #F5F5F4;
  margin: 0px;
}
</style>
