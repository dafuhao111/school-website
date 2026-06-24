<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="page-view">
    <div class="page-container">
      <h2 class="page-title">{{ route.meta.title ?? '页面' }}</h2>
      <p class="page-placeholder">内容建设中...hh</p>
    </div>
  </div>
</template>

<style scoped>
.page-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-container {
  background: #fff;
  border-radius: 6px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.page-title {
  font-size: 28px;
  color: #1a3c6e;
  margin: 0 0 16px 0;
  font-weight: 600;
}

.page-placeholder {
  font-size: 16px;
  color: #999;
  margin: 0;
}
</style>
