<template>
    <div class="content">
        <input type="text" class="search" v-model="inputVal" placeholder="请输入您想购买的水果进行搜索">
        <section v-for="dataItem in searchData" :key="dataItem.id" @click="getInfo(dataItem)" class="goods">
            <section class="left"><img :src="dataItem.img" alt=""></section>
            <section class="info">
               <span class="name">{{dataItem.name}}</span> 
               <span class="price">{{dataItem.price}}</span>
            </section>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputVal: "",
            data: []
        };
    },
    created() {
        axios.get("http://localhost:8080/static/hotFruit.json").then(resp => {
            this.data = resp.data;
        });
    },
    methods: {
        getInfo(info) {
            this.$router.push({
                name: "GoodsInfo",
                params: {
                    goodsinfo: info
                }
            });
        }
    },
    computed: {
        searchData() {
            let searchData = this.data,
                searchString = this.inputVal;
            if (!searchString) {
                return searchData;
            }
            searchString = searchString.trim();
            searchData = searchData.filter(function(item) {
                if (item.name.indexOf(searchString) !== -1) {
                    return item;
                }
            });
            // Return an array with the filtered data.
            return searchData;
        }
    }
};
</script>

<style lang="scss" scoped>
.content {
    .search {
        width: 300px;
        outline: none;
        border: 0.5px solid #ccc;
        border-radius: 25px;
        padding-left: 10px;
    }

    .goods {
        height: 125px;
        width: 100%;
        border-bottom: 1px solid #7f704938;
        &:last-child{
            border-bottom: 0;
        }
        .left {
            width: 50%;
            height: 120px;
            float: left;

            img {
                width: 120px;
            }
        }

        .info {
            width: 50%;
            position: relative;
            height: 120px;
            float: left;
            .name {
                width: 100%;
                display: block;
                color: black;
                position: absolute;
                top: 10px;
            }

            .price {
                width: 100%;
                position: absolute;
                top: 38px;
                font-size: 23px;
                color: red;
            }
        }
    }

    // .goods > section {
    //     float: left;
    //     height: 120px;
    // }
}
</style>