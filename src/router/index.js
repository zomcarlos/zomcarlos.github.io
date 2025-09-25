import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/en-us/AboutContent.vue'
import Projects from '../views/en-us/Projects.vue'
import Curriculum from '../views/en-us/Curriculum.vue'
import AboutContent_pt from "@/views/pt-br/AboutContent_pt.vue";
import Projects_pt from "@/views/pt-br/Projects_pt.vue";
import Curriculum_pt from "@/views/pt-br/Curriculum_pt.vue";
import AboutContent from "@/views/en-us/AboutContent.vue";

const routes = [
    { path: '/', component: AboutContent },
    { path: '/projects', component: Projects },
    { path: '/curriculum', component: Curriculum },

    // Optional: pt-br prefixed routes
    { path: '/pt', component: AboutContent_pt },
    { path: '/pt/projects', component: Projects_pt },
    { path: '/pt/curriculum', component: Curriculum_pt }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
