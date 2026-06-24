<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getAttachmentUrl, getPublicNewsDetail, type NewsItem } from '@/api/news'

const route = useRoute()

const article = ref<NewsItem | null>(null)
const loading = ref(false)
const errorMessage = ref('')

const articleId = computed(() => {
  const id = route.params.id
  return Array.isArray(id) ? id[0] || '' : String(id || '')
})

const attachments = computed(() => article.value?.attachments?.filter((item) => item.url) || [])

const formatDateTime = (value?: string) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}

const loadArticle = async () => {
  if (!articleId.value) {
    errorMessage.value = '新闻不存在'
    return
  }

  loading.value = true
  errorMessage.value = ''

  try {
    article.value = await getPublicNewsDetail(articleId.value)
  } catch (error) {
    article.value = null
    errorMessage.value = error instanceof Error ? error.message : '新闻加载失败'
  } finally {
    loading.value = false
  }
}

watch(articleId, loadArticle, { immediate: true })
</script>
<template>
  <section class="article-page">
    <div class="breadcrumb">
      <span>首页  >  </span>
      <RouterLink to="/">学院新闻</RouterLink>
      <span>  >  正文</span>

    </div>

    <div class="article-wrapper">

    <div v-if="loading" class="state-panel">新闻加载中...</div>
    <div v-else-if="errorMessage" class="state-panel">{{ errorMessage }}</div>

    <article v-else-if="article" class="article-card">
      <h1>{{ article.title }}</h1>
      <div class="meta">
        <span>发布时间：{{ formatDateTime(article.publishTime || article.updateTime || article.createTime) }}</span>
        <span v-if="article.supplier">供稿：{{ article.supplier }}</span>
        <span v-if="article.reviewer">审核：{{ article.reviewer }}</span>
        <span>栏目：{{ article.category }}</span>
      </div>

      <div class="article-content" v-html="article.content"></div>

      <div v-if="attachments.length" class="attachments">
        <h2>附件</h2>
        <a
            v-for="attachment in attachments"
            :key="attachment.url"
            :href="getAttachmentUrl(attachment.url)"
            target="_blank"
            rel="noopener noreferrer"
        >
          {{ attachment.name || '附件下载' }}
        </a>
      </div>
    </article>
      </div>
  </section>
</template>
<style scoped>

.article-page{
  background:#f5f5f5;
  padding:20px 0;
}

.article-wrapper{
  width:900px;
  margin:auto;

  background:#fff;
  border-top:3px solid #e6a23c;

  padding:25px 40px;
}

.breadcrumb{
  margin-bottom:20px;
  color:#666;
  font-size:14px;
}

.breadcrumb a{
  color:#005ca9;
  text-decoration:none;
}

.article-card h1{
  text-align:center;
  font-size:28px;
  margin-bottom:20px;
}

.meta{
  text-align:center;
  color:#999;

  border-bottom:1px solid #ddd;

  padding-bottom:15px;
  margin-bottom:30px;
}

.meta span{
  margin:0 10px;
}

.article-content{
  line-height:2;
  font-size:16px;
  color:#333;
}

.article-content img{
  max-width:100%;
  display:block;
  margin:20px auto;
}

.attachments{
  margin-top:40px;
  border-top:1px solid #eee;
  padding-top:20px;
}

.attachments a{
  display:block;
  margin-top:10px;
  color:#005ca9;
}

</style>