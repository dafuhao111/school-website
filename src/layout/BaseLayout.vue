<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/Theheader.vue'
import MainNav from '@/components/TheNav.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
<template>
  <div class="layout-container">
    <TheHeader />
    <MainNav />
    <main class="layout-main">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.layout-container{
  min-height:100vh;
  background:#f5f5f5;
}

.layout-main{
  min-height:700px;
  margin: 0;
  padding: 0;
  /* 关键：限制内部页面最大宽度，强制居中，和导航栏对齐 */
  max-width: 1400px;
  margin: 0 auto;
}
</style>