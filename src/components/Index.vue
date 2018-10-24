<template>
  <div class="page has-navbar" v-nav="{ title: 'Home' }">
    <div class="page-content text-center">
      <h2 class="padding" v-text="msg"></h2>

      <router-link class="button button-assertive" to="/list/products">
        <i class="ion-information-circled"></i> productlist
      </router-link>

      <list>
          <item v-for="(item,key) in userinfolist" :key="key">
              {{item._id}}-- {{item.user_name}}
          </item>
      </list>
      <router-link class="button button-assertive" to="/user">
        <i class="ion-information-circled"></i> user
      </router-link>
      <router-link class="button button-assertive" to="/user/about">
        <i class="ion-information-circled"></i> About
      </router-link>
      <router-link class="button button-assertive" to="/user/auth">
        <i class="ion-information-circled"></i> login
      </router-link>
      
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        msg: 'Hello! Vonic.'
      }
    },
    computed:mapState({
        userinfolist:state => state.users.userinfolist 
    }),
    created(){
       this.$store.dispatch('users/getUserInfoList')
    }
  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }

  /* .page.has-navbar .page-content {
    padding-top: 100px;
  } */
</style>
