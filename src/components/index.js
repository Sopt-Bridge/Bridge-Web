//글로벌 컴포넌트 인덱스

import Vue from 'vue';
import Rand from './Rand.vue';
import Rand2 from './Rand-test.vue';
import ViMain from './Vi-Main/Vi-Main.vue';
import ViSidebar from './Vi-Sidebar/Vi-Sidebar.vue';

Vue.component('Rand',Rand);
Vue.component('Rand-test',Rand2);
Vue.component('Vi-Main',ViMain);
Vue.component('Vi-Sidebar',ViSidebar);

export default Vue;

