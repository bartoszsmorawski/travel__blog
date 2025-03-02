<template>
  <div class="blog">
    <a :href="link" class="blog-link"> <img :src="srcImg" :alt="altText" class="blog-image" />
      <div class="blog-title">{{ title }}</div>
    </a>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  link: String,
  srcImg: String,
  altText: String,
})
</script>
<style scoped>
.blog {
  margin-top: 25px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.blog-link {
  text-decoration: none;
}

.blog-image {
  width: 100%;
  height: auto;
}


.blog-title {
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}
</style>
