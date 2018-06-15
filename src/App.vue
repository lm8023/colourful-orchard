<template>
  <div id="app">
    <header>{{headName}}</header>
    <router-view/>
    <footer>
      <ul>
        <li v-for="(nav,index) in navName" :key="nav.id" @click="btn(index)">{{nav}}</li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      navName:["首页","分类","购物车","个人中心"],
      headName:'首页'
    }
  },
  methods:{
    btn(index){
      this.headName=this.navName[index]
    }
  }

}
</script>

<style>
html,body{
  height: 100%;
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  font-size: 16px;
}
#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  height: 50px;
  background-color: blue;
  line-height: 50px;
}
footer{
  height: 60px;
  background-color: blue;
  line-height: 60px;
}
#app div{
  height: calc(100% - 110px);
  overflow-x: hidden;
  overflow-y: auto;
}
footer ul{
  height: 100%;
}
footer ul li{
  float: left;
  list-style-type: none;
  height: 100%;
  text-align: center;
  width: 25%;

}
</style>
