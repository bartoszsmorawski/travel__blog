// Ten plik zawiera informacje o włascicielu strony. Jest to uniwersalna sekcja zawierajaca te same informacje. Sekcja
technicznie zawiera opis, zdjęcie, tytuł podtytuł oraz linki do social mediów.

<template>
    <section class="AboutUsSection">
        <div class="container">
            <div class="image">
                <img :src="srcImg" :alt="altText" />
            </div>
            <div class="content">
                <h2 class="Title">{{ title }}</h2>
                <h3 class="subTitle">{{ subTitle }}</h3>
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
                <p class="Description">{{ description }}</p>
            </div>
        </div>
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
    max-width: 900px;
    margin: 0 auto;
    padding: 50px;
    transition: all 0.3s linear;
}


.Title {
    color: #4A4A4A;
    font-size: 38px;
    font-weight: 500;
}

.subTitle {
    color: #4A4A4A;
    font-size: 23px;
    font-weight: 400;
    margin-bottom: 15px;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.image img {
    width: 300px;
    height: auto;
    border-radius: 20px;
}

.content {
    text-align: left;
    max-width: 500px;
}

h2 {
    font-size: 22px;
    margin-bottom: 10px;
}

.social-icons {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

.social-icons img {
    width: 32px;
    height: 32px;
}

.SocialMediaLink {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10%;
    border: solid 1px #4A4A4A;
    background-color: #e0dede82;
    color: #4A4A4A;
}

.Description {
    color: #4A4A4A;
    font-size: 16px;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .container {
        flex-wrap: wrap-reverse;
    }

    .image img {
        margin: 0 auto;
    }

    .Title {
        font-size: 25px;
        text-align: center;
    }

    .subTitle {
        text-align: center;
    }

    .social-icons {
        justify-content: center;
    }

    .Description {
        text-align: center;
    }
}
</style>