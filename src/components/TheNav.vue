<script setup lang="ts">
// 无需额外逻辑
</script>

<template>
  <nav>
    <ul class="first">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <a href="#">学院概况</a>
        <ul class="second">
          <li><router-link to="/intro">学院简介</router-link></li>
          <li><router-link to="/leadership">现任领导</router-link></li>
          <li><router-link to="/organization">组织机构</router-link></li>
          <li><router-link to="/guide">办事指南</router-link></li>
        </ul>
      </li>
      <li>
        <a href="#">师资队伍</a>
        <ul class="second">
          <li><router-link to="/faculty-intro">师资队伍简介</router-link></li>
          <li><router-link to="/supervisors">硕士博士导师</router-link></li>
          <li><router-link to="/faculty-dept">按教师所在部门</router-link></li>
        </ul>
      </li>
      <li>
        <a href="#">本科生教育</a>
        <ul class="second">
          <li><router-link to="/undergrad">本科生教育</router-link></li>
          <li><router-link to="/innovation">创新创业</router-link></li>
        </ul>
      </li>
      <li>
        <a href="#">研究生教育</a>
        <ul class="second">
          <li><router-link to="/postgrad">学位点年度建设</router-link></li>
        </ul>
      </li>
      <li>
        <a href="#">科学研究</a>
        <ul class="second">
          <li><router-link to="/research-platform">科研平台</router-link></li>
          <li><router-link to="/research-team">研究团队</router-link></li>
          <li><router-link to="/research-projects">科研项目</router-link></li>
        </ul>
      </li>
      <li>
        <a href="#">党建工作</a>
        <ul class="second">
          <li><router-link to="/party-branch">支部设置</router-link></li>
          <li><router-link to="/party-events">专题活动</router-link></li>
          <li><router-link to="/theory-study">理论学习</router-link></li>
          <li><router-link to="/grassroots">基层动态</router-link></li>
        </ul>
      </li>
      <li>
        <a href="#">学生工作</a>
        <ul class="second">
          <li><router-link to="/student-activities">学生活动</router-link></li>
          <li><router-link to="/notice">通知公告</router-link></li>
          <li><router-link to="/career">就业指导</router-link></li>
          <li><router-link to="/yiban">易班动态</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/recruitment">人才招聘</router-link>
      </li>
      <li>
        <router-link to="/theory-study2">理论学习</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* 样式继承全局 dept7.css，此处无需额外定义 */
</style>