import { createRouter, createWebHistory } from 'vue-router'
import Lessons from "../views/Lessons"
import Home from "../views/Home"
import EditLesson from "../components/EditLesson"
import Content from "../views/Content"
import LessonSlides from "../components/LessonSlides"



import { projectAuth } from '../firebase/config';

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Home' })
  } else {
    next({name: 'Lessons'})
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: "/lessons",
    name: "Lessons",
    component: Lessons,
    beforeEnter: requireAuth
  },
  {
    path: "/lessons/edit/:id",
    name: "EditLesson",
    component: EditLesson,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: "/lessons/content/:id",
    name: "Content",
    component: Content,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: "/lessons/:id/start",
    name: "LessonSlides",
    component: LessonSlides,
    props: true,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
