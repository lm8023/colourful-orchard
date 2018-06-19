<template>
    <div>
        <h2>登录</h2>
        <h2>注册</h2>
       <div>
           <Input v-model="value" placeholder="账号/邮箱" style="width: 300px"></Input>
           <Input v-model="value" placeholder="密码" style="width: 300px"></Input>
       </div>
       <div>
           <Input v-model="value" placeholder="账号" style="width: 300px"></Input>
           <Input v-model="value" placeholder="邮箱" style="width: 300px"></Input>
           <Input v-model="value" placeholder="手机号码" style="width: 300px"></Input>
           <Input v-model="value" placeholder="密码" style="width: 300px"></Input>
           <Input v-model="value" placeholder="确认密码" style="width: 300px"></Input>
           <button type="button">注册</button>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>