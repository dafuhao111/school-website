<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getPublicNewsPage, type NewsItem } from '@/api/news'

const collegeNewsList = ref<NewsItem[]>([])
const newsLoading = ref(false)
const newsError = ref('')

// 日期格式化：月/日
const formatNewsDate = (value?: string) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`
}

// 请求学院新闻接口
const fetchCollegeNews = async () => {
  newsLoading.value = true
  newsError.value = ''
  try {
    const page = await getPublicNewsPage({
      currentPage: 1,
      pageSize: 8,
      params: [],
    })
    collegeNewsList.value = page.records
  } catch (error) {
    newsError.value = error instanceof Error ? error.message : '新闻加载失败egfe'
  } finally {
    newsLoading.value = false
  }
}

onMounted(fetchCollegeNews)
</script>

<template>
  <div class="home-container">
    <!-- 轮播Banner：与导航栏无间隙 -->
    <div class="banner-section">
      <img src="/image/e2290421-481e-4f2f-8d27-0839a4409a8b.jpg" alt="学院宣传图" class="banner-img" />
    </div>

    <!-- 上栏：学院新闻 + 空白占位 + 通知公告 -->
    <div class="content-row top-row">
      <!-- 学院新闻 -->
      <div class="content-section">

        <div class="section-header">
          <h3>学院新闻</h3>
          <a href="#" class="more-link">MORE &gt;&gt;</a>
      </div>


        <div class="section-body">
          <ul class="dynamic_list dynamic_listb dynamic_liste fr">
            <li v-if="newsLoading" class="state-line">新闻加载中...</li>
            <li v-else-if="newsError" class="state-line">{{ newsError }}</li>
            <li v-else-if="collegeNewsList.length === 0" class="state-line">暂无已发布新闻</li>
            <template v-else>
              <li
                  v-for="news in collegeNewsList"
                  :key="news.id"
                  class="news-item"
              >
                <RouterLink
                    class="news-link"
                    :to="{ name: 'articleDetail', params: { id: news.id } }"
                    :title="news.title"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  {{ news.title }}
                </RouterLink>

                <span class="news-date">
    {{ formatNewsDate(news.publishTime || news.updateTime || news.createTime) }}
  </span>
              </li>
            </template>
          </ul>
        </div>
      </div>

      <!-- 灰色占位块 -->
      <div class="content-section empty-block" />

      <!-- 通知公告 -->
      <div class="content-section">
        <div class="section-header">
          <h3>通知公告</h3>
          <a href="#" class="more-link">MORE &gt;&gt;</a>
        </div>


        <div class="section-body">
          <ul>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">数学与计算科学学院 2026年硕士研究生复试安排（调剂生）</span>
                <span class="date">04/02</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">数学与计算科学学院 2026年硕士研究生调剂办法</span>
                <span class="date">04/02</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">数学与计算科学学院2026年硕士研究生拟录取名单公示（第一批）</span>
                <span class="date">03/28</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">桂林电子科技大学第七届大学生市场调查与分析大赛（本科生组）获奖名单公示</span>
                <span class="date">03/26</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">数学与计算科学学院2026年硕士研究生复试名单公示（第一批）</span>
                <span class="date">03/23</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">数学与计算科学学院 2026年硕士研究生复试安排（一志愿考生）</span>
                <span class="date">03/23</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">数学与计算科学学院 2026年硕士研究生复试办法</span>
                <span class="date">03/23</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于我院2026年第一次区级/校级创新训练项目验收成绩的公示</span>
                <span class="date">03/13</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!-- 下排三栏：学术活动 / 党建工作 / 学工新闻 -->
    <div class="content-row bottom-row">
      <!-- 学术活动 -->
      <div class="content-section">
        <div class="section-header">
          <h3>学术活动</h3>
          <a href="#" class="more-link">MORE &gt;&gt;</a>
        </div>


        <div class="section-body">
          <ul>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于浙江师范大学罗和治教授来校讲学的通知</span>
                <span class="date">01/12</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于广西民族大学简金宝教授来校讲学的通知</span>
                <span class="date">01/05</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">桂林电子科技大学数学与计算科学学院“数学+”学术交流分享活动（第七期</span>
                <span class="date">01/03</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于海南大学陈刚教授来校讲学的通知</span>
                <span class="date">12/23</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于南方科技大学杰曼诺夫数学中心冯致程副研究员来校讲学的通知</span>
                <span class="date">12/23</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">桂林电子科技大学数学与计算科学学院“数学+”学术交流分享活动（第六期）</span>
                <span class="date">12/23</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于杭州电子科技大学祁力群教授来校讲学的通知</span>
                <span class="date">12/17</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于复旦大学秦伯韡副研究员来校讲学的通知</span>
                <span class="date">12/17</span>
              </a>
            </li>
          </ul>

      </div>
      </div>

      <!-- 党建工作 -->
      <div class="content-section">
        <div class="section-header">
          <h3>党建工作</h3>
          <a href="#" class="more-link">MORE &gt;&gt;</a>
        </div>


        <div class="section-body">
          <ul>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于拟将黄建国等6名同志转为中共正式党员的公示</span>
                <span class="date">12/14</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于拟将张杰等6名同志转为中共正式党员的公示</span>
                <span class="date">12/11</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于拟将任翠雪等5名同志转为中共正式党员的公示</span>
                <span class="date">12/11</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于拟将王荟阳等8名同志转为中共正式党员的公示</span>
                <span class="date">12/11</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">数学与计算科学学院举行《习近平谈治国理政》第五卷专题辅导报告会（图）</span>
                <span class="date">11/21</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">2025年下半年预审通过的发展对象名单公示</span>
                <span class="date">11/19</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">副校长潘开林指导数学与计算科学学院党委理论学习中心组学习（图）</span>
                <span class="date">11/12</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">关于确定陈思涵等14名同志为发展对象人选的公示</span>
                <span class="date">10/23</span>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <!-- 学工新闻 -->
      <div class="content-section">
        <div class="section-header">
          <h3>学工新闻</h3>
          <a href="#" class="more-link">MORE &gt;&gt;</a>
        </div>


        <div class="section-body">
          <ul>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">【产教融合】数学与计算科学学院6名学子赴桂林谷科林科技有限公司开展实习实训</span>
                <span class="date">03/09</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">【产教融合】数学与计算科学学院5名学子赴广西计量检测研究院开展实习实训</span>
                <span class="date">03/06</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">【产教融合】数学与计算科学学院 2 名学子赴南宁宁檬数据科技有限公司开展实习实训</span>
                <span class="date">03/06</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">【产教融合】数学与计算科学学院11名学子赴广西特色作物研究院开启半年期实习实践</span>
                <span class="date">03/05</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">【产教融合】数学与计算科学学院召开产教融合实习实训行前动员暨安全教育会</span>
                <span class="date">03/02</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">数学与计算科学学院举办“‘五老’话数计”报告会（图）</span>
                <span class="date">11/20</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">数学与计算科学学院学生赴澳门开展研学活动（图）</span>
                <span class="date">07/20</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="dot">•</span>
                <span class="news-title">【访企拓岗促就业】学院赴桂林相关企业开展访企拓岗促就业活动</span>
                <span class="date">04/23</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 全局容器 */
.home-container{
  width:100%;
  max-width:1400px;
  margin:0 auto;
  background:#fff;

}

/* 1. 消除导航栏与图片间隔：margin/padding全部清零 */
/* 轮播Banner：与导航栏无间隙 */
.banner-section {
  width: 100%;
  margin: 0;
  padding: 0;
}
.banner-img {
  width: 100%;
  /* 删除 height:80% 错误百分比高度 */
  margin-top: 0;
  object-fit: cover;
  display: block; /* 彻底消除图片基线留白 */
}

/* 行通用布局 */
.content-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

/* 上栏三栏权重：3 : 4 : 3 对应原图比例 */
.top-row .content-section:nth-child(1) { flex: 3; }
.top-row .content-section:nth-child(2) { flex: 4; }
.top-row .content-section:nth-child(3) { flex: 3; }
.top-row .content-section { height: 350px; display: flex; flex-direction: column; }

/* 下栏三等分 */
.bottom-row .content-section { flex: 1; height: 350px; display: flex; flex-direction: column; }

/* 区块通用 */
.content-section {
  max-width: 320px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  margin-top: 20px;
}
/* 中间空白占位块 */
.empty-block {
  background-color: #ffffff;
}

/* 标题栏 */
.section-header{
  height:40px;
  background:#005ca9;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:0 15px;
}
.section-header h3 {
  color: #fff;
  font-size: 16px;
  margin: 0;
}
.more-link {
  color: #fff;
  text-decoration: none;
  font-size: 12px;
}

/* 内容容器：控制正文高度，解决文本框过长问题 */
.section-body {
  margin-top: 5px;
  border: 1px solid #e5e5e5;
  height: 100%;
  padding: 0 10px;
  background: #fff;
  /* 新增：父容器隐藏溢出 */
  overflow: hidden;
}

/* 列表基础样式 */
.content-section ul {
  list-style: none;
  margin: 0;
  padding: 0;

  overflow: hidden;
}
.content-section li {
  height: 30px;
  line-height: 30px;

  border-bottom: 1px dashed #eee;
}
.content-section li a {
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 2. 标题超长单行省略核心样式 */
.news-title {
  flex: 1;
  min-width: 0; /* 弹性省略必备 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #5c5c5c;
}

.dot {
  flex-shrink: 0;
  color: #666;
}
.date {
  flex-shrink: 0;
  color: #888;
  font-size: 13px;
}

/* 学院新闻列表单独适配 */
/* 学院新闻 */
.news-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 30px;
  line-height: 30px;

  border-bottom: 1px dashed #eee;

}
.news-link {
  flex: 1;
  min-width: 0; /* 弹性盒必须加，允许文字收缩 */
  color: #333;
  text-decoration: none;
  /* 省略三件套 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.news-date {
  flex-shrink: 0;

  margin-left: 10px;

  color: #888;
  font-size: 13px;
}
</style>