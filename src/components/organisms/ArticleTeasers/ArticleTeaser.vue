// Ten plik to jedna z sekcji, które po kliknieciu przenoszą do artykułu. W tym przypadku obrazek jest po lewej lub po prawej a po przeciwnej stronie jest opis i przycisk.

<template>
    <section class="FotoSection">
        <div class="Content">
            <h2 class="Title">{{ title }}</h2>
            <p class="Description">{{ description }}</p>
            <BasicButton v-if="basicButton" buttonText="Wiecej informacji..." />
        </div>
        <div class="Image"><img :src="srcImg" :alt="altText" class="blog-image" /></div>
    </section>
</template>
<script setup>
import { computed } from 'vue';
import BasicButton from '@/components/molecules/BasicButton.vue';

const props = defineProps({
    rightVariantImage: {
        type: Boolean,
        default: true
    },
    basicButton: {
        type: Boolean,
        default: true
    },
    title: String,
    description: String,
    srcImg: String,
    altText: String,
});
const backgroundColorValue = computed(() => props.rightVariantImage ? '#fff' : '#F8F9FA');
const flexDirectionValue = computed(() => props.rightVariantImage ? 'row' : 'row-reverse');
const paddingValue = computed(() => props.rightVariantImage ? '0px 0px 0px 50px' : '0px 50px 0px 0px');
</script>
<style scoped>
.FotoSection {
    background-color: v-bind(backgroundColorValue);
    display: flex;
    padding: v-bind(paddingValue);
    margin-top: 30px;
    gap: 30px;
    flex-direction: v-bind(flexDirectionValue);
}

.Content {
    margin-top: 80px;
    text-align: center;
}

.Title {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
}

.Description {
    text-align: center;
    font-size: 17px;
    line-height: 1.3;
}

.Image {
    height: 400px;
}

.blog-image {
    max-height: 100%;
}

.travel-section {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}


.image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    flex: 1;

}

.content-container {
    flex: 1;
    text-align: left;
}

.content-container h2 {
    font-size: 2rem;
    font-family: 'Arial', sans-serif;
    margin-bottom: 15px;
    line-height: 1.4;
}

.content-container p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 20px;
}

.cta-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
}

.cta-button:hover {
    background-color: #0056b3;
}

@media (max-width: 768px) {
    .travel-section {
        flex-direction: column;
        text-align: center;
    }

    .content-container {
        text-align: center;
    }
}

@media (max-width: 992px) {
    .FotoSection {
        flex-direction: column;
        padding: 0px;
    }

    .blog-image {
        width: 80%;
        height: auto;
    }

    .Image {
        text-align: center;
    }
}
</style>