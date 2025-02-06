<template>
    <button class="Button">{{ buttonText }}</button>
</template>
<script setup>
defineProps({
    buttonColor: {
        type: String,
        default: "#0073ad"
    },
    buttonText: String,
})
</script>
<style scoped>
.Button {
    text-align: center;
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: v-bind(buttonColor);
    color: #ffffff;
    cursor: pointer;
}
</style>