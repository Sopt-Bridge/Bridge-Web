import Vue from 'vue';
import Rand from './Rand.vue';
import Rand2 from './Rand-test.vue'
import Toolbar from './Toolbar/Toolbar.vue'
import Navdrawer from './Drawer/Navdrawer.vue'


Vue.component('Rand',Rand);
Vue.component('Rand-test',Rand2);
Vue.component('Toolbar', Toolbar);
Vue.component('Navdrawer', Navdrawer);

export default Vue;