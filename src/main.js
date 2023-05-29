import { createApp } from "vue";
import { MotionPlugin } from '@vueuse/motion'
import App from "./App.vue";
import "../public/general.scss";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight, faMinus, faPlus, faCode, faPalette, faLanguage, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faLinkedin, faGithub, faEnvelope, faArrowRight, faMinus, faPlus, faCode, faPalette, faLanguage, faEllipsisVertical);
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(MotionPlugin).use(Vue3Lottie).mount("#app");
