<template>
    <div>
        <section><img :src="goodsdata.img" alt=""></section>
        <section>
            <li><label>价格</label><span>{{goodsdata.price}}</span><label>规格/份</label><span>{{goodsdata.weight}}</span></li>
            <li><span>{{goodsdata.PlaceofOrigin}}</span><span>{{goodsdata.nutrientelements}}</span></li>
        </section>
    </div>
</template>
<script>
export default {
    data () {
        return {
            goodsdata:this.$route.params.goodsinfo
        }
    }
};
</script>
<style lang="scss" scoped>
div{
    section{
        li{
            list-style: none;
        }
    }
}
</style>


