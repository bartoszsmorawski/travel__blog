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
.AboutUsSection {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    max-width: 1100px;
}

;

.Content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

;

.Title {
    text-align: center;
}

;

.subTitle {
    text-align: center;
}

;

.icoInstagram {
    color: #C13584;
}

;

.icoYouTube {
    color: #FF0000;
}

;

.icoFacebook {
    color: #1877F2;
}

;

.Description {
    text-align: justify;
    line-height: 1.5;
    margin: 0;
}

;

.Image {
    max-width: 400px;
    margin: 0 auto;
}

;
</style>