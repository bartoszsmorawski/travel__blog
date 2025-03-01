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
    background-color: #DDD0C8;
    color: #4A4A4A;
}

.input {
    padding: 10px;
    margin: 10px;
    width: 300px;
    border: solid 1px #4A4A4A;
    border-radius: 5px;
    color: #4A4A4A; 
    
}

.button {
    padding: 10px;
    margin: 10px;
    width: 100px;
    border: solid 1px #4A4A4A;
    border-radius: 5px;
    color: #4A4A4A;
    cursor: pointer;
}

.subMenuItem {
    color: #4A4A4A;
    text-decoration: none;
    padding: 10px;
}

.FooterBottom {
    background-color: #ddd0c8b8;
}

.Copyright {
    color: #4A4A4A;
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