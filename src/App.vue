<template>
    <div id="app">
        <header>{{headName}}</header>
        <router-view/>
        <footer>
            <ul>
                <li v-for="(nav,index) in navName" :key="nav.id" :class="{red:changed == index}" @active="change(index)" @click="btn(index,$router.options.routes[index+1].name)">
                    <span class="icon">
                        <Icon :type="nav.icon"></Icon>
                    </span>
                    <span class="typeface" :class="{red:changed == index}">{{nav.name}}</span>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            changed: 0,
            navName: [
                {
                    name: "首页",
                    icon: "android-home"
                },
                {
                    name: "搜索",
                    icon: "android-search"
                },
                {
                    name: "购物车",
                    icon: "android-cart"
                },
                {
                    name: "个人中心",
                    icon: "person"
                }
            ],
            headName: "首页"
        };
    },
    methods: {
        btn(index, paogram) {
            this.headName = this.navName[index];
            this.$router.push({ name: paogram });
            this.changed = index;
        }
    }
};
</script>

<style lang="scss">
html,
body {
    height: 100%;
    font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
    font-size: 16px;
}

#app {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    &>div {
        height: calc(100% - 110px);

        overflow-x: hidden;
        overflow-y: auto;
    }
}

header {
    height: 60px;
    color: #fff;
    background-color: #019418;
    line-height: 50px;
}
.red {
    color: #fe4791;
}

footer {
    height: 60px;
    ul {
        height: 100%;
        border-top: 1px solid #fe4791;
        li {
            padding: 6px;
            float: left;
            color: #0eb08f;
            list-style-type: none;
            height: 100%;
            text-align: center;
            width: 25%;
            span {
                display: block;
            }
            span.icon {
                font-size: 1.2rem;
            }
            span.typeface {
                font-size: 0.8rem;
            }
        }
    }
}
</style>
