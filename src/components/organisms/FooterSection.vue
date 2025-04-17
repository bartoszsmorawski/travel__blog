// Ten plik odpowiada za tworzenie stopki. Jest to podstawowa sekcja wykorzystywana wszędzie. 

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
});
</script>
<style scoped>

.Footer{
    background-color: #F5F5F4;
    margin-top: 50px;
}
.Content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #e7e7e7;
    color: #4A4A4A;
}

.Newsletter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 5px;
}

.input {
    background: #ffffffcc;
    color: #1D3557;
    padding: 10px 12px;
    font-size: 16px;
    border: 1px solid #4A4A4A;
    border-radius: 12px;
    outline: none;
    width: 100%;
    max-width: 300px;

}

.input::placeholder {
    color: #0000008f;
    opacity: 0.7;
}

.input:focus {
    background: #ffffff;
    border-color: #1D3557;
}

.button {
    background: #ffffffcc;
    color: #1D3557;
    white-space: nowrap;
    padding: 10px 12px;
    font-size: 16px;
    border: 1px solid #4A4A4A;
    border-radius: 12px;
    cursor: pointer;
}

.button:hover {
    background: #ffffff;
}

.subMenuItem {
    color: #4A4A4A;
    text-decoration: none;
    font-size: 16px;
    padding: 10px;
}

.FooterBottom {
    background-color: #F5F5F4;
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

.Title {
    color: #4A4A4A;
    font-size: 40px;
    font-weight: 500;
    margin: 0;

}

.subTitle {
    color: #4A4A4A;
    font-size: 18px;
    font-weight: normal;
}

@media(max-width: 576px) {
    .Title {
        text-align: center;
    }
}
</style>