require("./bootstrap");
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import i18n from "./i18n/index.js";
import App from "./App.vue";
import store from "./store";

import Helpers from "./helpers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueEllipseProgress from 'vue-ellipse-progress';
import JQuery from 'jquery'
import photojoiner from "./photojoiner.js";
// import Paintable from './assets/js/plugin';
// Vue.use(Paintable);
import EmojiPicker from 'vue-emoji-picker'
import vSelect from 'vue-select'
import 'vue-loaders/dist/vue-loaders.css';
import VueLoaders from 'vue-loaders';
import Paintable from 'vue-paintable';
import VTooltip from 'v-tooltip';
import Multiselect from 'vue-multiselect'
// import VueLoading from 'vue-loading-template'
// Vue.use(VueLoading, /** options **/)
import VueCryptojs from 'vue-cryptojs'
import ckeditor from 'ckeditor4-vue'

import VueKonva from 'vue-konva'
import vuescroll from 'vuescroll';
import VueMeta from 'vue-meta'
import Embed from 'v-video-embed'
import VueResizeText from 'vue-resize-text';

Vue.use(VueResizeText)


Vue.use(VueMeta,{
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

// You can set global config here.


// global register
Vue.use(Embed);
Vue.use(vuescroll, {
  ops: {
    // The global config
  },
  name: 'myScroll' // customize component name, default -> vueScroll
});



Vue.use(VueKonva)
Vue.use(VueCryptojs)
Vue.use(ckeditor)
const MediaInfo = require('mediainfo.js')
Vue.use(VueEllipseProgress);
Vue.component('v-select', vSelect)
Vue.use(VueLoaders);
Vue.use(Paintable, {
  // optional methods
  setItem(key, image) {
    localStorage.setItem(key, image);
  },
  // you also can use async
  getItem(key) {
    return localStorage.getItem(key);
  },
  removeItem(key) {
    localStorage.removeItem(key);
  }
});
Vue.use(VTooltip);
Vue.use(EmojiPicker)

Vue.component('multiselect', Multiselect)
import {
  faLock,
  faLockOpen,
  faDownload,
  faUserFriends,
  faCheck,
  faLink,
  faUserEdit,
  faUser,
  faFileAudio,
  faFileVideo,
  faSyncAlt,
  faShare,
  faHome,
  faEyeSlash,
  faBars,
  faSearch,
  faEllipsisV,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faUpload,
  faFolderPlus,
  faTh,
  faThList,
  faInfo,
  faFolder,
  faFile,
  faFileImage,
  faTimes,
  faSort,
  faTrashAlt,
  faHdd,
  faEllipsisH,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faLock,
  faLockOpen,
  faDownload,
  faUserFriends,
  faCheck,
  faLink,
  faUserEdit,
  faUser,
  faFileAudio,
  faFileVideo,
  faHdd,
  faSyncAlt,
  faShare,
  faHome,
  faEyeSlash,
  faBars,
  faSearch,
  faEllipsisV,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faUpload,
  faTrashAlt,
  faFolderPlus,
  faTh,
  faThList,
  faInfo,
  faFolder,
  faFile,
  faFileImage,
  faTimes,
  faSort,
  faEllipsisH,
  faPencilAlt
);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.use(VueRouter);
Vue.use(Helpers);

Vue.config.productionTip = false;

var vueFileManager = new Vue({
  i18n,
  store,
  router,
  data: {
    config,
  },
  render: (h) => h(App),
}).$mount("#app");
