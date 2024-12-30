<template>
    <MobileMenu v-if="isMobile" />
    <DesktopMenu v-else />
    {{windowWidth}}
</template>
<script setup>
import DesktopMenu from "../molecules/DesktopMenu.vue";
import MobileMenu from "../molecules/MobileMenu.vue";
import useWindowWidth from "@/comosables/useWindowWidth";

const { windowWidth, isMobile } = useWindowWidth();
</script>
<style scoped></style>