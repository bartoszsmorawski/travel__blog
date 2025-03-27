<template>
  <TravelNavbar backgroundgcColor="#4A4A4A" />
  <div class="article-page">
    <h1 class="title">- Porozmawiajmy o krajach: {{ route.params.country }} -</h1>
    <h2 class="subTitle">Czyli co warto wiedzieć o tym kraju ?</h2>

    <div v-if="articlesForCountry.length">
      <ArticlePreview v-for="country in articlesForCountry" :key="country.id" :title="country.title" content=""
        :imageSrc="country.imageLink" />
    </div>
    <div v-else>
      <p>Brak artykułów dotyczących tego kraju.</p>
    </div>

    <div class="article-info">
      <h2>Podróżowanie po Austrii</h2>
      <p>Austria ma doskonale rozwiniętą sieć transportu. Koleje ÖBB oferują wygodne połączenia między miastami, a
        autostrady i drogi są w bardzo dobrym stanie. Warto też skorzystać z lokalnych środków transportu, takich jak
        tramwaje w Wiedniu czy kolejki górskie w Alpach.
      </p>

      <h2>Austria : kraina Alp, zabytków i niezwykłych podróży</h2>
      <p>Austria to kraj pełen kontrastów : od majestatycznych szczytów Alp po historyczne miasta pełne zabytków i
        kultury.
        To idealne miejsce na wyjazd zarówno dla miłośników górskich wędrówek, sportów zimowych, jak i pasjonatów
        historii
        oraz muzyki. Dzięki doskonale rozwiniętej infrastrukturze turystycznej Austria oferuje podróżnym komfortowe
        warunki
        do zwiedzania i wypoczynku przez cały rok.</p>

      <h3>Wiedeń : stolica pełna historii i kultury</h3>
      <p>Wiedeń, stolica Austrii, to miasto o bogatej historii i niezwykłej atmosferze. Zachwyca elegancką architekturą,
        pięknymi pałacami i licznymi atrakcjami kulturalnymi. Do najważniejszych zabytków należą:</p>
      <ul>
        <li>Pałac Schönbrunn : dawna letnia rezydencja Habsburgów, otoczona przepięknymi ogrodami,</li>
        <li>Hofburg : monumentalny kompleks pałacowy, który przez wieki był centrum władzy cesarskiej,</li>
        <li>Katedra św. Szczepana : gotycka perła Wiednia, symbol miasta,</li>
        <li>Opera Wiedeńska : jedno z najważniejszych miejsc na muzycznej mapie świata,</li>
        <li>Muzeum Historii Sztuki i Muzeum Albertina : skarbnice dzieł światowej klasy artystów.</li>
      </ul>
      <p>Wiedeń słynie również z kawiarni i tradycyjnych specjałów kulinarnych, takich jak tort Sachera czy Wiener
        Schnitzel. To idealne miejsce na spacer po urokliwych uliczkach i odpoczynek w parkach, jak np. Prater czy
        Burggarten.</p>

      <h3>Salzburg : miasto Mozarta</h3>
      <p>Położony u stóp Alp Salzburg to miasto, w którym urodził się Wolfgang Amadeusz Mozart. Jego zabytkowe Stare
        Miasto
        znajduje się na liście UNESCO. Warto zobaczyć:</p>
      <ul>
        <li>Twierdzę Hohensalzburg : imponującą warownię górującą nad miastem,</li>
        <li>Dom Mozarta : muzeum poświęcone słynnemu kompozytorowi,</li>
        <li>Pałac i ogrody Mirabell : niezwykle malownicze miejsce, idealne na spacer,</li>
        <li>Katedrę św. Ruperta : jeden z najważniejszych kościołów w Austrii.</li>
      </ul>
      <p>Salzburg to także miasto festiwali : co roku odbywa się tu słynny Festiwal Salzburski, przyciągający miłośników
        muzyki klasycznej z całego świata.</p>

      <h3>Alpy austriackie : raj dla miłośników natury i sportów zimowych</h3>
      <p>Austria to prawdziwy raj dla osób kochających góry. Alpy austriackie oferują doskonałe warunki do uprawiania
        narciarstwa, snowboardu, turystyki pieszej i wspinaczki. Najpopularniejsze regiony to:</p>
      <ul>
        <li>Tyrol : region słynący z malowniczych dolin i doskonałych stoków narciarskich w miejscowościach takich jak
          Innsbruck, Kitzbühel czy Sölden,</li>
        <li>Zell am See-Kaprun : obszar idealny dla miłośników sportów wodnych i górskich wędrówek,</li>
        <li>Dolina Wachau : znana z winnic i rejsów po Dunaju, doskonałe miejsce na relaksującą podróż.</li>
      </ul>
      <p>Latem Alpy zachęcają do wędrówek, jazdy na rowerze oraz podziwiania zapierających dech w piersiach widoków.
        Zimą
        Austria staje się mekką narciarzy z całego świata, oferując świetnie przygotowane trasy i nowoczesne kurorty.
      </p>

      <h3>Inne ciekawe miejsca w Austrii</h3>
      <ul>
        <li>Hallstatt : jedno z najpiękniejszych miasteczek w Europie, położone nad jeziorem i otoczone górami. To
          miejsce
          wpisane na listę UNESCO przyciąga turystów swoim bajkowym wyglądem.</li>
        <li>Graz : miasto pełne zabytków, znane z urokliwego starego miasta i współczesnej architektury, np.
          futurystycznego
          budynku Kunsthaus Graz.</li>
        <li>Innsbruck : stolica Tyrolu, łącząca historię z nowoczesnością, idealna baza wypadowa dla narciarzy i
          miłośników
          gór.</li>
        <li>Krimml : wodospady Krimml : jedne z najwyższych w Europie, spektakularne miejsce dla fanów przyrody.</li>
      </ul>

      <h3>Podsumowanie</h3>
      <p>Austria to kraj pełen niesamowitych atrakcji, łączący piękno przyrody z bogatą historią i kulturą. Niezależnie
        od
        pory roku można tu znaleźć coś dla siebie : od zwiedzania zabytkowych miast, przez relaks w malowniczych
        dolinach,
        aż po aktywne wakacje w Alpach. To jedno z tych miejsc, do których chce się wracać, by odkrywać jego kolejne
        tajemnice.</p>
    </div>
  </div>
</template>

<script setup>
import TravelNavbar from '@/components/organisms/TravelNavbar.vue';
import ArticlePreview from '@/components/molecules/ArticlePreview.vue';
import { computed } from 'vue';

import { useRoute } from 'vue-router';
const route = useRoute();

import { useArticles } from "@/comosables/useArticles";
const { getArticlesByCountry } = useArticles();

const articlesForCountry = computed(() => getArticlesByCountry(route.params.country).value);
</script>
<style scoped>
.article-page {
  margin-top: 80px;
  padding-left: 60px;
  padding-right: 60px;
}

.title {
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-top: 150px;
  margin-bottom: 10px;
}

.subTitle {
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  margin-top: 15px;
}


.article-img {
  width: 30%;
  border-radius: 8px;
}



.read-more {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
}

.article-info {
  padding: 16px;
}
</style>