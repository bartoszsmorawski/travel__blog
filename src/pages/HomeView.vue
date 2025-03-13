<template>
    <SliderGalery />

    <h2 class="ArticlesTitle">- Nasze Wpisy -</h2>
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
    <FotoSection title="Wloskie morze, czy warto wybrać się tam na wakacje ?"
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

    <FotoSectionBaner title="Podróż samolotem" :srcImg="require('@/assets/image/morze.jpg')" altText="Sea" description="Podróż samolotem to szybki i wygodny sposób przemieszczania się na duże odległości. Po starcie można podziwiać widoki z okna, a lot często przebiega spokojnie i komfortowo. Dzięki nowoczesnym technologiom podróże lotnicze są dobrze zorganizowane i bezpieczne.
Dlaczego nie warto się bać latania?
Samoloty to jeden z najbezpieczniejszych środków transportu
Piloci są świetnie wyszkoleni i doświadczeni
Turbulencje są normalnym zjawiskiem i nie stanowią zagrożenia
Dzięki lataniu można szybko dotrzeć do wymarzonych miejsc

Strach przed lataniem jest naturalny, ale warto pamiętać, że miliony ludzi codziennie latają bez problemów!" />
</template>

<script setup>
import ArticleWidget from "../components/organisms/ArticleWidget.vue";
import FotoSection from "@/components/organisms/FotoSection.vue";
import FotoSectionBaner from "@/components/organisms/FotoSectionBaner.vue";
import AboutUsSection from "@/components/organisms/AboutUsSection.vue";
import SliderGalery from "@/components/organisms/SliderGalery.vue";
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