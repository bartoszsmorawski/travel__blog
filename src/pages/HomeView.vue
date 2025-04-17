//Ten plik odpowiada za informacje style i funkcje strony głównej. Bardzo ważny plik !

<template>
    <SliderGalery />
    <h2 class="ArticlesTitle">- Nasze Wpisy -</h2>
    <div class="ArticleGroup">
        <ArticleWidget v-for="article in getLatestArticles" :key="article.id" :title="article.title"
            link="https://www.google.pl/" :srcImg="article.imageLink" altText="Góry" />
    </div>
    <ArticleTeaser title="Wloskie morze, czy warto wybrać się tam na wakacje ?"
        :srcImg="require('@/assets/image/morze.jpg')" altText="Sea" :rightVariantImage="false" description="Morze Włoskie to ogólne określenie na wody otaczające Włochy, czyli Morze Liguryjskie, Tyrreńskie, Jońskie i Adriatyckie. Każde z nich oferuje piękne plaże, lazurową wodę i malownicze wybrzeża.
Dlaczego warto się tam wybrać?
 Ciepły, śródziemnomorski klimat
 Krystalicznie czysta woda idealna do kąpieli i nurkowania
 Urokliwe nadmorskie miasteczka, jak Amalfi, Cinque Terre czy Rimini
 Bogata kultura, wyśmienita kuchnia i niesamowite widoki

To idealne miejsce na relaks, zwiedzanie i wakacyjne przygody!" />

    <AboutUsSection title="Blog podróżniczy Jan Nowak" subTitle="O mnie"
        :srcImg="require('@/assets/image/traveler.jpg')" altText="Traveler picture"
        description="Podróżowanie to moja pasja i sposób na życie. Uwielbiam odkrywać nowe miejsca, poznawać lokalne kultury i smakować tradycyjne potrawy. Każda podróż to dla mnie nie tylko przygoda, ale też okazja do nauki i poszerzania horyzontów. Na mojej stronie dzielę się relacjami z wypraw, praktycznymi poradami i inspiracjami, które pomogą Ci zaplanować własne podróże. Świat jest pełen niezwykłych miejsc chodź, odkryjmy je razem!" />

    <ArticleTeaserBaner title="Podróż samolotem" :srcImg="require('@/assets/image/morze.jpg')" altText="Sea"
        description="Podróż samolotem to szybki i wygodny sposób przemieszczania się na duże odległości. Po starcie można podziwiać widoki z okna, a lot często przebiega spokojnie i komfortowo. Dzięki nowoczesnym technologiom podróże lotnicze są dobrze zorganizowane i bezpieczne.
Dlaczego nie warto się bać latania?
Samoloty to jeden z najbezpieczniejszych środków transportu
Piloci są świetnie wyszkoleni i doświadczeni
Turbulencje są normalnym zjawiskiem i nie stanowią zagrożenia
Dzięki lataniu można szybko dotrzeć do wymarzonych miejsc

Strach przed lataniem jest naturalny, ale warto pamiętać, że miliony ludzi codziennie latają bez problemów!" />
</template>

<script setup>
import { onMounted } from 'vue';

import ArticleWidget from "../components/organisms/ArticleWidget.vue";
import ArticleTeaser from "@/components/organisms/ArticleTeasers/ArticleTeaser.vue";
import AboutUsSection from "@/components/organisms/AboutUsSection.vue";
import SliderGalery from "@/components/organisms/SliderGalery.vue";
import ArticleTeaserBaner from '@/components/organisms/ArticleTeasers/ArticleTeaserBaner.vue';

import { useArticles } from "@/comosables/useArticles";
import { useAnimations } from "@/comosables/useAnimations";

const { getLatestArticles } = useArticles();

onMounted(() => {
    useAnimations();
});
</script>

<style scoped>
.ArticlesTitle {
    color: #4A4A4A;
    margin-top: 50px;
    text-align: center;
    font-size: 35px;
    font-weight: 400;
}

.ArticleGroup {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    max-width: 1100px;
    margin: 0px auto;
    margin-bottom: 60px;
}
</style>