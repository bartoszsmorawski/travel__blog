<template>
    <button class="Button">{{ buttonText }}</button>
</template>
<script setup>
defineProps({
    buttonColor: {
        type: String,
        default: "#F5F5F4"
    },
    color: {
        type: String,
        default: "#4A4A4A"
    },
    buttonText: String,
});
</script>
<style scoped>
.Button {
    text-align: center;
    font-size: 20px;
    padding: 10px;
    border: 1px solid #4A4A4A;
    border-radius: 5px;
    background-color: v-bind(buttonColor);
    color: v-bind(color);
    cursor: pointer;
    margin: 10px;
}
</style>

