<template>
    <div class="SocialMedia">
        <a class="SocialMediaIcon" href="https://www.instagram.com/">
            <Instagram :size="35" color="#4A4A4A" class="icoInstagram" />
        </a>
        <a class="SocialMediaIcon" href="https://www.youtube.com/">
            <Youtube :size="35" color="#4A4A4A" class="icoYouTube" />
        </a>
        <a class="SocialMediaIcon" href="https://www.facebook.com/">
            <Facebook :size="35" color="#4A4A4A" class="icoFacebook" />
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
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 8px;
}
</style>