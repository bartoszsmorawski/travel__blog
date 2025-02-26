<template>
    <footer class="Footer">
        <div class="Content">
            <h2 class="Title">{{ title }}</h2>
            <h3 class="subTitle">{{ subTitle }}</h3>
            <div class="Newsletter">
                <input class="input" type="text" placeholder="Wpisz adres E-mail">
                <button class="button">Zapisz się !</button>
            </div>
            <div class="subMenu">
                <a class="subMenuItem" href="">O nas</a>
                <a class="subMenuItem" href="">Współpraca</a>
                <a class="subMenuItem" href="">Kontakt</a>
                <a class="subMenuItem" href="">Nasze linki</a>
            </div>
        </div>
        <div class="FooterBottom">
            <SocialMedia />
            <p class="Copyright">Copyright 2025 © All rights Reserved.</p>
        </div>

    </footer>
</template>
<script setup>
import SocialMedia from '../molecules/SocialMedia.vue';
defineProps({
    title: String,
    subTitle: String,
})
</script>
<style scoped>
.Content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #000000;
    color: #fff;
}

.input {
    padding: 10px;
    margin: 10px;
    width: 300px;
}

.button {
    padding: 10px;
    margin: 10px;
    width: 100px;
    background-color: #f5f5f5;
    color: #000;
    border: none;
    cursor: pointer;
}

.subMenuItem {
    color: #fff;
    text-decoration: none;
    padding: 10px;
}

.FooterBottom {
    background-color: #000000d8;
}

.Copyright {
    color: #fff;
    text-align: center;
    padding: 10px;
}

.SocialMedia {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
}
</style>