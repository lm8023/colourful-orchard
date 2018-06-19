<template>
    <div>
        <input type="text" class="search" v-model="inputVal">
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
    computed: {
        searchData() {}
    }
};
</script>

<style lang="scss" scoped>
div {
    .search {
        width: 300px;
        outline: none;
        border: 0.5px solid #ccc;
        border-radius: 25px;
        padding-left: 10px;
    }
}
</style>