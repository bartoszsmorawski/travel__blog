<template>
    <section class="FotoBaner">
        <h2 class="Title">{{ title }}</h2>
        <p class="Description">{{ description }}</p>
        <BasicButton buttonText="Kliknij tutaj !" buttonColor="#000000"/>
    </section>

</template>
<script setup>
import { computed } from 'vue';
import BasicButton from '../molecules/BasicButton.vue';

const props = defineProps({
    title: String,
    description: String,
    srcImg: String,
})

const backgroundImageValue = computed(() => `url("${props.srcImg}")`);

</script>
<style scoped>
.FotoBaner {
    color: #ffffff;
    text-align: center;
    padding: 80px;
    background-image: v-bind(backgroundImageValue);
    background-repeat: no-repeat ;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
}

.FotoBaner::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: #00000071;
    z-index: 1;
}

.FotoBaner * {
    position: relative;
    z-index: 2;
}
</style>
