<template>
  <TravelNavbar backgroundgcColor="#4A4A4A" />

  <h1 class="title-aboutUs">O nas - czyli o twórcach bloga podróżniczego</h1>
  <h2 class="subTitle-aboutUs ">Podróżujemy, nagrywamy filmy o podróżach i piszemy bloga!</h2>


  <AboutUsSection title="O mnie i o mojej pasji" :srcImg="require('@/assets/image/traveler.jpg')"
    altText="Traveler picture"
    description="Cześć! Jestem Jan Nowak – niespokojny duch, który nie potrafi usiedzieć w jednym miejscu. Od lat przemierzam świat, odkrywając jego najbardziej fascynujące zakątki – od tętniących życiem metropolii po odludne, zapomniane przez cywilizację miejsca.

Podróżowanie to dla mnie coś więcej niż hobby – to styl życia, sposób na poznawanie innych kultur, smakowanie lokalnych potraw i odkrywanie niezwykłych historii, które kryją się za każdym rogiem. Każda wyprawa to nowa lekcja pokory i zachwytu nad światem.

Na Pocztówkach ze świata dzielę się moimi doświadczeniami, praktycznymi poradami oraz ciekawostkami, które mogą zainspirować Cię do własnych podróży. Czy wiesz, że w Japonii istnieje wyspa zamieszkana wyłącznie przez koty? A może słyszałeś o wiosce w Norwegii, gdzie słońce nie zachodzi przez kilka miesięcy? To tylko niektóre z niesamowitych miejsc, które miałem okazję odwiedzić!" />

</template>

<script setup>
import TravelNavbar from '@/components/organisms/TravelNavbar.vue';
import AboutUsSection from "@/components/organisms/AboutUsSection.vue";
</script>
<style scoped>

.title-aboutUs {
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-top: 150px;
  margin-bottom: 10px;
}

.subTitle-aboutUs {
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  margin-top: 15px;
}
</style>
