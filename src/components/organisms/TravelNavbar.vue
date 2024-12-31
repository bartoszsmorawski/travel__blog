<template>
    <MobileMenu v-if="isMobile" />
    <DesktopMenu v-else />
</template>
<script setup>
import DesktopMenu from "../molecules/DesktopMenu.vue";
import MobileMenu from "../molecules/MobileMenu.vue";
import useWindowWidth from "@/comosables/useWindowWidth";

const { isMobile } = useWindowWidth();
</script>
<style scoped></style>