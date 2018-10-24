import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import users from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state:{
        isLogin:false
    },
    actions:{
        islogin({commit}){
            commit('SET_LOGIN',true)
        },
        unlogin({commit}){
            commit('LOGIN_OUT');
        }
    },
    mutations:{
        SET_LOGIN(state,islogin){
            state.isLogin = islogin
        },
        LOGIN_OUT(state){
            
            state.isLogin = false
            console.log('清除登录状态',state.isLogin);
        }
    },
    modules:{
        products,
        users
    },
    strict:debug,
    plugins:[]
})