<template>
  <el-container class="container">
    <!-- 导航栏 -->

    <Header @back="goback">
    <!-- logo -->
      <template #icon>
         <el-avatar class="logo-icon" :src="require('@/assets/home/logo.jpg')" :size="50"></el-avatar>
      </template>
      <!-- 系统名字 -->
      <template #title>
        <span class="logo-title" >成都市金牛区电子围栏系统</span>
      </template>
      <!-- 用户信息 -->
      <template #userinfo>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{user.username + "（" + user.role + "）"}}
            <el-icon>
              <ArrowDown/>
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </Header>


    <el-container class="data-container">
      <el-aside>
        <el-menu class="menu">
          <!--有二级菜单，则以子菜单的形式展示;没有二级菜单，则以菜单项显示-->
          <template v-for="(item, idx) in menuList">
            <template v-if="item.submenu.length != 0">
              <el-sub-menu :index="idx+''" :key="idx">
                <template #title>
                  <div v-if="item.icon.length !== 0" class="menu-img-default menu-img" :style="getIcon(item.icon)"></div>
                  <span>{{item.title}}</span>
                </template>
                <el-menu-item
                    v-for="(subitem, subidx) in item.submenu"
                    :index="idx+'-'+subidx"
                    :key="subidx"
                    @click="displayContent(subitem.to)">
                  <div v-if="subitem.icon.length !== 0" class="menu-img-default menu-img" :style="getIcon(item.icon)"></div>
                  <span>{{subitem.title}}</span>
                </el-menu-item>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :index="idx" :key="idx" @click="displayContent(item.to)">
                <div v-if="item.icon.length !== 0" class="menu-img-default menu-img" :style="getIcon(item.icon)"></div>
                <span>{{item.title}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import {House, ArrowDown, Setting, Link} from "@element-plus/icons-vue";
import Header from "@/components/Header.vue";
import Map from "@/views/home/components/MapView.vue"
import {ref, reactive, computed, onBeforeMount, onMounted} from "vue";

onMounted(()=>{router.push('/home/map')})
// 由于<script setup>使用动态组件时，:is属性的值是对象实例，而不是组件名
// 而menuList里的icon是组件名，因此这里做一个映射
const icons = {
  House, Setting
}
const user = reactive({
  username: '张三',
  role: '管理员'
})
// 设置子系统名字
const route = useRoute()
const subsysName = ref(route.params.subsysName)

// 导航栏的返回上一级按键
const router = useRouter()
function goback(){
  router.push('/home')
}

// 这个应该从后台请求获得
const menuList = [
  {icon: '03,16', title:'地图界面', to:'map', click:"", submenu:[]},
  {icon: '01,07', title:'人员管理', to:'rygl', click:'', submenu:[]},
  {icon: '02.14', title:'围栏管理', to:'wlgl', click:'', submenu:[]},
  {icon: '04,14', title:'签到考勤', to:'', click:'', submenu:[]},
  // {icon: 'icon-jkjm.png', title:'案件管理', to:'', click:'', submenu:[{icon:'icon-jkjm.png', title:'子模块1', to:'/subpath1', click:''},  {icon: 'icon-jkjm.png', title:'子模块2', to:'/subpath2', click:''}]},
]
function getIcon(idxStr){
  const len = -30
  const x = parseInt(idxStr.split(',')[1] - 1) * len
  const y = parseInt(idxStr.split(',')[0] - 1) * len
  return {
    backgroundPositionX: x + 'px',
    backgroundPositionY: y + 'px'
  }
}

function displayContent(name){
  router.push({name})
}
</script>

<style scoped src="@/assets/css/subsys.css">
</style>
<style scoped>
.menu-img-default{
  /**原图每个图标都是45 * 45，这里将其变成30 * 30,所以background-size的长宽都乘了2/3 */
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-image: url('@/assets/home/nav-icon.png');
  background-size: calc(1000px * 2 / 3) calc(1000px * 2 / 3);
}
</style>