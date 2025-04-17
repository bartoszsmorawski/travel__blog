// W tym pliku znajdua sie poszczególne podstawowe informacje o różnych krajach. Style są takie same jedynie poprzez api w przyszłości tekst będzie podstawiał się automatycznie w zależności od tego na jakiej podstornie będziemy sie znajdować. W poniższym przypadu jest opis Austrii który ma być przypisany do /Austria. Na moment pisania tego komentarza ten tekst występuje jako przykład w każdej podstornie każdego kraju. 

<template>
  <div class="ArticleContainer">
    <DescriptionBasicSection class="description-basic animate fade-up"
      title="Podróżowanie po Austrii – przewodnik dla miłośników przygód" :srcImg="require('@/assets/image/morze.jpg')"
      altText="Sea"
      description="Austria to kraj, który zachwyca swoją różnorodnością – od majestatycznych Alp, przez malownicze jeziora, aż po urokliwe miasta pełne historii i kultury. To idealne miejsce zarówno dla miłośników aktywnego wypoczynku, jak i dla tych, którzy cenią sobie relaks w pięknym otoczeniu. W tym przewodniku podpowiemy, jak najlepiej zwiedzać Austrię, co warto zobaczyć i jak się przygotować do podróży." />

    <ArticleTeaser class="ArticleTeaser animate fade-left" title=" Jak podróżować po Austrii?"
      :srcImg="require('@/assets/image/Austria.jpg')" altText="Sea" :rightVariantImage="true" :basicButton="false"
      description="Austria to kraj o świetnie rozwiniętej infrastrukturze transportowej. Podróżowanie samochodem jest idealnym wyborem dla osób, które chcą dotrzeć w trudno dostępne miejsca, na przykład alpejskie doliny. Kolej austriacka (ÖBB) oferuje komfortowe połączenia między miastami i regionami, a autobusy są szczególnie przydatne w regionach górskich, gdzie pociągi nie docierają. Dla miłośników aktywnego wypoczynku Austria posiada również świetnie rozwiniętą sieć tras rowerowych, na przykład wzdłuż Dunaju." />

    <ArticleTeaser class="ArticleTeaser animate fade-right" title="Najpiękniejsze miejsca w Austrii."
      :srcImg="require('@/assets/image/viena.jpg')" altText="Sea" :rightVariantImage="false" :basicButton="false"
      description="Wiedeń to serce Austrii i miasto, które koniecznie trzeba zobaczyć. Spacer po starówce, wizyta w Pałacu Schönbrunn i Katedrze św. Szczepana to obowiązkowe punkty podróży. Nie można też zapomnieć o wiedeńskiej kawie i torcie Sachera, które są nieodłącznym elementem wizyty w tym mieście.
Salzburg, znany jako rodzinne miasto Mozarta, zachwyca barokową architekturą, twierdzą Hohensalzburg i malowniczym Starym Miastem wpisanym na listę UNESCO. Hallstatt to prawdziwa perełka Austrii – niewielka miejscowość nad jeziorem, otoczona górami, która jest jednym z najczęściej fotografowanych miejsc w kraju. Z kolei Innsbruck, nazywany stolicą Alp, jest idealnym miejscem dla miłośników sportów zimowych i górskich wędrówek. Latem można tu wybrać się na trekking w okoliczne Alpy, a zimą skorzystać z doskonałych warunków narciarskich." />

    <ArticleTeaser class="ArticleTeaser animate fade-left" title="Alpejskie przygody – trekking i narty"
      :srcImg="require('@/assets/image/apls.jpg')" altText="Sea" :rightVariantImage="true" :basicButton="false"
      description="Austria to raj dla miłośników gór. Latem warto wybrać się na wędrówki po Alpach w regionach takich jak Tyrol, Vorarlberg i Karyntia. Zimą kraj ten słynie z doskonałych ośrodków narciarskich, takich jak Kitzbühel, St. Anton czy Zell am See, które oferują świetnie przygotowane trasy oraz malownicze krajobrazy." />

    <DescriptionBasicSection class="description-basic animate fade-up"
      title="Kuchnia austriacka – czego warto spróbować?"
      description="Podczas podróży po Austrii nie można zapomnieć o lokalnej kuchni. Klasycznym daniem jest Wiener Schnitzel, czyli panierowany sznycel wiedeński. Na deser warto spróbować Apfelstrudela, czyli strudla jabłkowego, oraz Kaiserschmarrn – puszystego naleśnika cesarskiego. Dla miłośników czekolady obowiązkowym punktem jest Sachertorte, czekoladowe ciasto z morelową konfiturą, które jest symbolem wiedeńskiej cukierni." />

    <ArticleTeaser class="ArticleTeaser animate fade-right" title="Podróżowanie po Austrii"
      :srcImg="require('@/assets/image/transports.jpg')" altText="Sea" :rightVariantImage="true" :basicButton="false"
      description="Austria ma doskonale rozwiniętą sieć transportu. Koleje ÖBB oferują wygodne połączenia między miastami, a
      autostrady i drogi są w bardzo dobrym stanie. Warto też skorzystać z lokalnych środków transportu, takich jak
      tramwaje w Wiedniu czy kolejki górskie w Alpach." />

    <ArticleTeaser class="ArticleTeaser animate fade-left" title="Praktyczne wskazówki dla podróżników"
      :srcImg="require('@/assets/image/travel-tips.jpg')" altText="Sea" :rightVariantImage="false" :basicButton="false"
      description="Walutą obowiązującą w Austrii jest euro, a językiem urzędowym niemiecki, jednak w turystycznych miejscach angielski jest powszechnie używany. Obywatele Unii Europejskiej nie potrzebują wizy do wjazdu, a Austria jest krajem, który warto odwiedzać przez cały rok. Zimą przyciąga miłośników nart, a latem zachwyca górskimi szlakami i pięknymi jeziorami." />

    <ArticleTeaser class="ArticleTeaser animate fade-right" title="Podsumowanie"
      :srcImg="require('@/assets/image/alps2.jpg')" altText="Sea" :rightVariantImage="true" :basicButton="false"
      description="Austria to kraj, który ma coś do zaoferowania każdemu podróżnikowi. Niezależnie od tego, czy chcesz zwiedzać historyczne miasta, uprawiać sporty zimowe, czy po prostu cieszyć się pięknymi widokami, na pewno znajdziesz coś dla siebie. Pakuj walizki i wyrusz na przygodę!" />
  </div>

</template>

<script setup>
import { onMounted } from 'vue';

import ArticleTeaser from './ArticleTeasers/ArticleTeaser.vue';
import DescriptionBasicSection from './DescriptionBasicSection.vue';

import { useAnimations } from "@/comosables/useAnimations";

onMounted(() => {
  useAnimations();
});
</script>
<style scoped>
.description-basic {
  margin-top: 30px;
}
</style>