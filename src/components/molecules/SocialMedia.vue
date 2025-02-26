<template>
    <div class="SocialMedia">
        <a class="SocialMediaIcon" href="https://www.instagram.com/">
            <Instagram :size="35" color="#000000" class="icoInstagram" />
        </a>
        <a class="SocialMediaIcon" href="https://www.youtube.com/">
            <Youtube :size="35" color="#000000" class="icoYouTube" />
        </a>
        <a class="SocialMediaIcon" href="https://www.facebook.com/">
            <Facebook :size="35" color="#000000" class="icoFacebook" />
        </a>
    </div>
</template>
<script setup>
import { Instagram, Youtube, Facebook } from 'lucide-vue-next';
</script>
<style scoped>
.SocialMedia {
    display: flex;
    gap: 10px;
}


.SocialMediaIcon {
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
}
</style>