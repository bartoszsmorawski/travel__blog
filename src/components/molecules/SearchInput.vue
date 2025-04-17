//W tym pliku jest tworzona wyszukiwarka, pod kątem stylów oraz funkcjonalności. 

<template>
    <div v-if="isOpen" class="InputModal">
        <div class="Container">
            <input type="text" class="SearchInput" placeholder="Szukaj...">
            <X class="CloseIcone" @click="() => isOpen = !isOpen" />
        </div>
    </div>
    <div class="IconWrapper">
        <Search color="white" :size="iconSize" @click="() => isOpen = !isOpen" />
    </div>
</template>
<script setup>
import { Search, X } from 'lucide-vue-next';
import { ref } from "vue";

defineProps({
    iconSize: {
        type: Number,
        default: 24
    }
});

const isOpen = ref(false)
</script>
<style scoped>
.InputModal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000008d;
    color: #fff;
}

.SearchInput {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ffffff;
    outline: none;
    color: #ffffff;
    font-size: 20px;
}

.SearchInput::placeholder {
    color: #ffffff;
    text-align: center;
}

.IconWrapper {
    height: 100%;
    display: flex;
    align-items: center;
}

.CloseIcone {
    cursor: pointer;
}

.Container {
    height: 50px;
    display: flex;
    align-items: center;
}
</style>
