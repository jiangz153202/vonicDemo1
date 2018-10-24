import shop from '../../api/shop'

//初始化state ≈ vue的默认data()
const state = {
    all : []
}

//getters ≈ vue的计算属性 co
const getters={}

// actions ≈ 异步方法 比如回调 await啥的
const actions = {
    getAllProducts ({commit}){
        console.log('接受出请求');
        shop.getProducts(products => {
            commit('setProducts',products)
        })
    }
}

//mutations 约等于 methods 函数
const mutations = {
    setProducts(state,products){
        state.all = products
    },
    //自减 product的inventory参数值
    decrementProductInventory(state,{id}){
        const product = state.all.find(product => product.id == id)
        product.inventory--
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
