import { createApp } from "vue";
import { MotionPlugin } from '@vueuse/motion'
import router from "./router";
import App from "./App.vue";
import "../public/general.scss";
import axios from 'axios'
import VueAxios from 'vue-axios'
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight, faMinus, faPlus, faCode, faPalette, faLanguage, faEllipsisVertical, faMobile, faHouse, faScroll, faFileLines, faArrowDown, faLink, faBarsStaggered, faXmark, faStar, faBriefcase, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faLinkedin, faGithub, faEnvelope, faArrowRight, faMinus, faPlus, faCode, faPalette, faLanguage, faEllipsisVertical, faMobile, faHouse, faScroll, faFileLines, faArrowDown, faLink, faBarsStaggered, faXmark, faStar, faBriefcase, faMagnifyingGlass);
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import VueCookies from 'vue-cookies'
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(VueAxios, axios).use(VueCookies).use(router).use(MotionPlugin).use(Vue3Lottie).mount("#app");
