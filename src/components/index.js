//글로벌 컴포넌트 인덱스

import Vue from 'vue';
import Rand from './Rand.vue';

import Rand2 from './Rand-test.vue'
import Toolbar from './Toolbar/Toolbar.vue'
import Navdrawer from './Drawer/Navdrawer.vue'
import MainPoster from './Poster/MainPoster.vue'
import Recommended from './Contents/Recommended.vue'
import Trending from './Contents/Trending.vue'
import ViMain from './Vi-Main/Vi-Main.vue'
import ViSidebar from './Vi-Sidebar/Vi-Sidebar.vue'
import Recently from './Contents/Recently.vue'
import VideoCard from './Contents/VideoCard.vue'



Vue.component('Rand',Rand);
Vue.component('Rand-test',Rand2);
Vue.component('Toolbar', Toolbar);
Vue.component('Navdrawer', Navdrawer);
Vue.component('MainPoster', MainPoster);
Vue.component('Recommended', Recommended);
Vue.component('Trending', Trending);
Vue.component('Vi-Main',ViMain);
Vue.component('Vi-Sidebar',ViSidebar);
Vue.component('Recently', Recently);
Vue.component('Video-card',VideoCard);

export default Vue;

