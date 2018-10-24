import user from '../../api/user'
const state =  {
    userinfolist :[]
}

const getters = {}

const actions = {
    getUserInfoList({commit}){
        user.getUserInfo()
        .then(res => {
            console.log('action中调用封装后的axios成功',res)
            commit('setUserInfoList',res.data) 
        })
       
    }
}

const mutations ={
    setUserInfoList(state,userlist){
        //console.log('接受的数据',userlist);
        state.userinfolist = userlist;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
