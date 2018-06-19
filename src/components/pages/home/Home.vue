<template>
  <div class="hello">
    <ul>
      <li v-for="item in msg" :key="item.id">
        <img :src="item.img" alt="">
        <p>
          <label>{{item.name }}</label>
          <label>{{item.weight}}</label>
        </p>
        <p class="pink">{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: []
        };
    },
    created() {
        axios.get("http://localhost:8080/static/hotFruit.json").then(resp => {
            this.msg = resp.data;
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
    font-weight: normal;
}
$color: #fe4791;
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
li:hover {
    cursor: pointer;
}
a {
    color: #42b983;
}
p {
    text-align: left;
}
.pink {
    color: #fe4791;
}
</style>
