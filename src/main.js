import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueAMap, {initAMapApiLoader} from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css'

initAMapApiLoader({
    key: '61ad75101d54a5371d872c69fdce0d3f'
})
createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(VueAMap)
    .mount('#app')
    
//引入高德地图