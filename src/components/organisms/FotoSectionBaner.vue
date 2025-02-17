<template>
    <section class="FotoBaner">
        <h2 class="Title">Podróż samolotem</h2>
        <p class="Description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit voluptatum nulla iure!
            Ea sunt necessitatibus
            labore quis odit ad dolorem commodi eveniet quidem pariatur. Fuga ipsa nulla eaque et!</p>
        <BasicButton buttonText="Kliknij tutaj !" class="BasicButton" />
    </section>

</template>
<script setup>
import BasicButton from '../molecules/BasicButton.vue';

</script>
<style scoped>
.FotoBaner {
    color: #ffffff;
    text-align: center;
    padding: 80px;
    background-image: url("../../assets/image/wpis3.jpg");
    background-attachment: fixed;
}
</style>