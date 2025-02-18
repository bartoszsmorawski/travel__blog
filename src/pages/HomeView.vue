<template>
    <TravelNavbar />
    <SliderGalery />
    <h2 class="ArticlesTitle">Nasze Wpisy</h2>
    <div class="ArticleGroup">
        <ArticleWidget title="Magiczne Zakątki Świata, Które Musisz Odwiedzić" link="https://www.google.pl/"
            :srcImg="require('@/assets/image/giewontPhoto.jpg')" altText="Góry" />
        <ArticleWidget title="Przygoda Życia: Najlepsze Miejsca na Twój Następny Wyjazd" link="https://www.google.pl/"
            :srcImg="require('@/assets/image/wpis1.jpg')" altText="Góry" />
        <ArticleWidget title="Sekrety Udanych Podróży: Inspiracje i Porady dla Odkrywców" link="https://www.google.pl/"
            :srcImg="require('@/assets/image/wpis2.jpg')" altText="Góry" />
        <ArticleWidget title="Od Plaż po Góry: Różnorodne Kierunki na Idealne Wakacje" link="https://www.google.pl/"
            :srcImg="require('@/assets/image/wpis3.jpg')" altText="Góry" />
        <ArticleWidget title="Podróże Blisko i Daleko: Niezapomniane Destynacje na Każdy Budżet"
            link="https://www.google.pl/" :srcImg="require('@/assets/image/wpis4.jpg')" altText="Góry" />
        <ArticleWidget title="Kultura, Przyroda i Adrenalina: Wybierz Swój Styl Podróżowania"
            link="https://www.google.pl/" :srcImg="require('@/assets/image/morze.jpg')" altText="Góry" />
    </div>
    <FotoSection title="Italian" :srcImg="require('@/assets/image/morze.jpg')" altText="Morze"
        :rightVariantImage="false" />


</template>

<script setup>
import TravelNavbar from "../components/organisms/TravelNavbar.vue";
import ArticleWidget from "../components/organisms/ArticleWidget.vue";
import FotoSection from "@/components/organisms/FotoSection.vue";
import SliderGalery from "@/components/organisms/SliderGalery.vue";
</script>

<style scoped>
.ArticlesTitle {
    text-align: center;
}

.ArticleGroup {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    max-width: 1100px;
    margin: 0px auto;
}
</style>