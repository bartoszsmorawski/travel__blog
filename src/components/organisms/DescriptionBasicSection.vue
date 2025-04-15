<template>
  <section class="FotoBaner">
      <h2 class="Title">{{ title }}</h2>
      <p class="Description">{{ description }}</p>
  </section>

</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  srcImg: String,
})

const backgroundColorValue = computed(() => props.rightVariantImage ? '#fff' : '#F8F9FA');

</script>
<style scoped>

.Title {
  color: #000000;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
}

.Description {
  color: #000000;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  line-height: 1.4;
}
.FotoBaner {
  background-color: v-bind(backgroundColorValue);
  padding: 80px;
  position: relative;
}

</style>
