<template>
    <button class="Button">{{ buttonText }}</button>
</template>
<script setup>
defineProps({
    buttonColor: {
        type: String,
        default: "#B0B8B4"
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
    color: #4A4A4A;
    cursor: pointer;
    margin: 10px;
}
</style>