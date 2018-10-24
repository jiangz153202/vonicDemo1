<template>
    <div class="page has-navbar" v-nav="{title:'登录页面',showBackButton:true}">
        <div class="page-content">
            <!-- 页面内容 -->
          <div class="item item-divider">
            有标签: {{ username }}
          </div>
          <von-input type="text" v-model="username" placeholder="用户名/手机/邮箱" label="用户名" ></von-input>
          <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>
          <div class="md_group_padding">
              <md-button class="button button-balanced button-block" type="submit" @click.native="axiosToParams">
                SingIn
              </md-button>
          </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions,mapMutations } from 'vuex'
export default {
    data() {
      return {
        username: "18820608362",
        password: "123456",
        return_url:this.$route.query.redirect,
        base_url:'/'
      }
    },
    created(){
      //this.getUserList();
    
      //带上路径
      //console.log("这是路径",this.return_url)
    },
    methods:{
      axiosToParams(){
        const params = new URLSearchParams();
        params.append('username', this.username);
        params.append('userpassword', this.password);
        const $this = this;
        this.$axios({
          url:'//localhost:3000/api/user/auth',
          method:'post',
          data:params
        })
        .then((resp)=>{
         
            if(resp.data.code === 10000){
              sessionStorage.setItem('jk-access-token',resp.data.data);
              //发起请求
              $this.$store.dispatch('islogin');
              
              $toast.show("登录成功,正在跳转中...", 3000).then(() => {
                console.log('toast hide')
                let redirect = $this.return_url || $this.base_url ;
                //页面跳转
                $router.push({
                  path:redirect
                })
              })
              //登录成功
              
            }else{
              //登录失败
              $toast.show(resp.data.data, 3000).then(() => {
                console.log('toast hide')
              })
            }
            
        })
        .catch((err)=>{
          console.log(err);
        })
      },
      getUserList(){
        this.$axios.get('//localhost:3000/api/user/userinfolist')
        .then((response)=>{
          console.log('返回的结果',response)
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    }
}
</script>
<style lang="css" scoped>
    .md_group_padding{
      padding:0 0.24rem
    }
</style>



