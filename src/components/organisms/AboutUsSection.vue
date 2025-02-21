<template>
    <section class="AboutUsSection">
        <div class="Content">
            <h2 class="Title">{{ title }}</h2>
            <h3 class="subTitle">{{ subTitle }}</h3>
            <Instagram class="icoInstagram" />
            <Youtube class="icoYouTube" />
            <Facebook class="icoFacebook" />
            <p class="Description">{{ description }}</p>
        </div>
        <div class="Image"><img :src="srcImg" :alt="altText" /></div>
    </section>
</template>
<script setup>
import { Instagram, Youtube, Facebook } from 'lucide-vue-next';
defineProps({
    title: String,
    subTitle: String,
    description: String,
    srcImg: String,
    altText: String,
})

</script>
<style scoped>
.AboutUsSection {}

;

.Content {}

;

.Title {}

;

.subTitle {}

;

.icoInstagram {}

;

.icoYouTube {}

;

.icoFacebook {}

;

.Description {}

;

.Image {}

;
</style>