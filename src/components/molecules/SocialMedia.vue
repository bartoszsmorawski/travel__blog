<template>
    <div class="social-icons">
        <a class="SocialMediaLink" href="https://www.instagram.com/">
            <Instagram class="icoInstagram" />
        </a>
        <a class="SocialMediaLink" href="https://www.youtube.com/">
            <Youtube class="icoYouTube" />
        </a>
        <a class="SocialMediaLink" href="https://www.facebook.com/">
            <Facebook class="icoFacebook" />
        </a>
    </div>
</template>
<script setup>
import { Instagram, Youtube, Facebook } from 'lucide-vue-next';
</script>
<style scoped>
.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-top: 30px;
}


.SocialMediaLink {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 10%;
    border: solid 1px #4A4A4A;
    background-color: #e0dede82;
    color: #4A4A4A;
}
</style>