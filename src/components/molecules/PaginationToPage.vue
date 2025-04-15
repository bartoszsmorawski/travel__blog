<template>
    <div class="pagination-container">
      <ul class="pagination">
        <li><a href="#">« Poprzednie</a></li>
        <li><a href="#" class="active">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">Następne »</a></li>
      </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

.pagination li {
  margin: 0 5px;
}

.pagination a {
  text-decoration: none;
  color: #00000052;
  font-weight: bold;
}

.pagination .active {
  font-weight: bold;
  color: #000000;
}

.pagination-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-style {
  color: #000000;
}
</style>