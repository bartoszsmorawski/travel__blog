<template>
    <footer class="Footer">
        <div class="Content">
            <h2 class="Title">{{ title }}</h2>
            <h3 class="subTitle">{{ subTitle }}</h3>
            <input type="text" placeholder="Wpisz adres E-mail">
            <BasicButton buttonText="Zapisz się" buttonColor="#000000" />
            <div class="subMenu">
                <a href="">O nas</a>
                <a href="">Współpraca</a>
                <a href="">Kontakt</a>
                <a href="">Nasze linki</a>
            </div>
        </div>
        <div class="FooterBottom">
            <SocialMedia />
            <p class="Copyright">Copyright 2025 © All rights Reserved.</p>
        </div>

    </footer>
</template>
<script setup>
import BasicButton from '../molecules/BasicButton.vue';
import SocialMedia from '../molecules/SocialMedia.vue';
defineProps({
    title: String,
    subTitle: String,
})

</script>
<style scoped>
.FooterBottom{
    background-color: #000000;
}
.Copyright{
    color: #fff;
    text-align: center;
    padding: 10px;
}
</style>