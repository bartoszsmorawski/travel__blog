<template>
    <button class="Button">{{ buttonText }}</button>
</template>
<script setup>
defineProps({
    buttonColor: {
        type: String,
        default: "#e0dede82"
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
    padding: 8px;
    border: 1px solid #4A4A4A;
    border-radius: 3px;
    background-color: v-bind(buttonColor);
    color: v-bind(color);
    cursor: pointer;
    margin: 10px;
}
</style>