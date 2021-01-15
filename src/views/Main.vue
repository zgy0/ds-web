<template>
  <div class="main">
    <el-container style="height: 100%">
      <el-aside width="300px">
        <el-menu
          default-active="this.$route.path"
          router
          class="el-menu-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#0a0a0a"
          text-color="#fff"
          active-text-color="#ffd04b"
          height="100%"
          unique-opened="true"
        >
        <el-submenu index = "1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>网络热点数据</span>
          </template>  
          <el-menu-item v-for="(item, i) in navList[0]"
                        :key="i"
                        :index="item.name">
            <template slot="title">
              <span>{{item.navItem}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index = "2">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据分析模型</span>
          </template>  
          <el-menu-item v-for="(item, i) in navList[1]"
                        :key="i"
                        :index="item.name">
            <template slot="title">
              <span>{{item.navItem}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index = "3">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>智能企划决策</span>
          </template>  
          <el-menu-item v-for="(item, i) in navList[2]"
                        :key="i"
                        :index="item.name">
            <template slot="title">
              <span>{{item.navItem}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index = "4">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>企业信息管理</span>
          </template>  
          <el-menu-item v-for="(item, i) in navList[3]"
                        :key="i"
                        :index="item.name">
            <template slot="title">
              <span>{{item.navItem}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      navList: [
        [
          {name: '/baiduHotData', navItem: '百度热点数据'},
          {name: '/weiboHotData', navItem: '微博热点数据'}
        ],
        [
          {name: '/profile', navItem: '用户数字画像'},
          {name: '/gProfile', navItem: '用户群体数字画像'},
          {name: '/track', navItem: '消费轨迹分析'},
          {name: '/methon', navItem: '评论情感分析'}
        ],
        [
          {name: '/hotDataAnalytical', navItem: '网络热点统计'},
          {name: '/trent', navItem: '热点趋势统计'},
          {name: '/salesAnalytical', navItem: '销售情况统计'}
        ]
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #0a0a0a;
  text-align: center;
  line-height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100%;
}

html,
body,
.main,
#app,
body > .el-container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>