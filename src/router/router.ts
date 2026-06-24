import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from "@/layout/BaseLayout.vue"
import HomeView from "@/views/Index.vue"
import NewsDetail from "@/views/ArticleDetail.vue"
import PageView from "@/views/PageView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      children: [
        { path: '', name: 'home', component: HomeView },
        { path: 'news/:id', name: 'articleDetail', component: NewsDetail },

        // 学院概况
        { path: 'intro', name: 'intro', component: PageView, meta: { title: '学院简介' } },
        { path: 'leadership', name: 'leadership', component: PageView, meta: { title: '现任领导' } },
        { path: 'organization', name: 'organization', component: PageView, meta: { title: '组织机构' } },
        { path: 'guide', name: 'guide', component: PageView, meta: { title: '办事指南' } },

        // 师资队伍
        { path: 'faculty-intro', name: 'facultyIntro', component: PageView, meta: { title: '师资队伍简介' } },
        { path: 'supervisors', name: 'supervisors', component: PageView, meta: { title: '硕士博士导师' } },
        { path: 'faculty-dept', name: 'facultyDept', component: PageView, meta: { title: '按教师所在部门' } },

        // 本科生教育
        { path: 'undergrad', name: 'undergrad', component: PageView, meta: { title: '本科生教育' } },
        { path: 'innovation', name: 'innovation', component: PageView, meta: { title: '创新创业' } },

        // 研究生教育
        { path: 'postgrad', name: 'postgrad', component: PageView, meta: { title: '学位点年度建设' } },

        // 科学研究
        { path: 'research-platform', name: 'researchPlatform', component: PageView, meta: { title: '科研平台' } },
        { path: 'research-team', name: 'researchTeam', component: PageView, meta: { title: '研究团队' } },
        { path: 'research-projects', name: 'researchProjects', component: PageView, meta: { title: '科研项目' } },

        // 党建工作
        { path: 'party-branch', name: 'partyBranch', component: PageView, meta: { title: '支部设置' } },
        { path: 'party-events', name: 'partyEvents', component: PageView, meta: { title: '专题活动' } },
        { path: 'theory-study', name: 'theoryStudy', component: PageView, meta: { title: '理论学习' } },
        { path: 'grassroots', name: 'grassroots', component: PageView, meta: { title: '基层动态' } },

        // 学生工作
        { path: 'student-activities', name: 'studentActivities', component: PageView, meta: { title: '学生活动' } },
        { path: 'notice', name: 'notice', component: PageView, meta: { title: '通知公告' } },
        { path: 'career', name: 'career', component: PageView, meta: { title: '就业指导' } },
        { path: 'yiban', name: 'yiban', component: PageView, meta: { title: '易班动态' } },

        // 人才招聘
        { path: 'recruitment', name: 'recruitment', component: PageView, meta: { title: '人才招聘' } },

        // 理论学习（导航栏第二个入口）
        { path: 'theory-study2', name: 'theoryStudy2', component: PageView, meta: { title: '理论学习' } },
      ]
    }
  ]
})

export default router