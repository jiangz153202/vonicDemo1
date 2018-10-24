import axios from 'axios'
import $store from '../store'

//拦截request 设置全局请求为ajax
axios.interceptors.request.use((config) => {
    config.withCredentials = true
    config.headers['username'] = '1234555555';
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    console.log('是否为登录的',$store.state.isLogin);
    if ($store.state.isLogin) {
        
        //如果登录 就传入头部
        config.headers['Authorization'] = sessionStorage.getItem('jk-access-token');
    }
      
    console.log('2发起请求', config);
   
    return config
})

axios.interceptors.response.use((response) => {
    // 若不是正确的返回code，且已经登录，就抛出错误
    console.log('3收到请求,但还未返回给api', response);
    switch (response.data.code) {
        case 60001:
            //没有token 需要登录
            $router.replace({
                path: '/user/auth',
                query: { redirect: $router.currentRoute.fullPath }
            })
            break;
        case 60002:
            //token无效
            $store.dispatch('unlogin');
            $router.replace({
                path: '/user/auth',
                query: { redirect: $router.currentRoute.fullPath }
            })
            break;
        default:
            break;
    }
    return response;
}, (err) => {
    //这是处理状态码不为200的时候的错误处理
    if (err && err.response) {
        console.log('2.1 处理错误信息')
    }

    return Promise.reject(err)
})

axios.install = (Vue) => {
    Vue.prototype.$axios = axios
}

export default axios;