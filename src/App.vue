<template>
  <div id="app">
    <header>{{headName}}</header>
    <router-view/>
    <footer>
      <ul>
        <li v-for="(nav,index) in navName" :key="nav.id" @click="btn(index,$router.options.routes[index+1].name)">
          <span class="icon"><Icon :type="nav.icon"></Icon></span>
          <span class="typeface">{{nav.name}}</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      navName:[
          {
              name:"首页",
              icon:"android-home"
          },
          {
              name:"搜索",
              icon:"android-search"
          },
          {
              name:"购物车",
              icon:"android-cart"
          },
          {
              name:"个人中心",
              icon:"person"
          }
          ],
      headName:'首页'
    }
  },
  methods:{
    btn(index,paogram){
      this.headName=this.navName[index].name;
      this.$router.push({name: paogram});
    }
  }

}
</script>

<style lang="scss">
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
}
#app div{
  height: calc(100% - 110px);
  padding: 6px 8px;
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
  cursor:pointer;

}
footer{
    ul{
        li{
            padding: 6px;
            span{
                display: block;
            }
        }
    }
}
.typeface{
    font-size: 0.8rem
}
.icon{
    font-size: 1.2rem
}
</style>
