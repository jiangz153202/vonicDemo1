<template>
    <div class="page has-navbar" v-nav="{title:'ProductList'}">
        <div class="page-content">
            <list class="list-ios">
                <item v-for="(product,key) in products" :key="key">
                    {{ product.title }} - {{ product.price | currency }}
                </item>
            </list>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    created(){
        //初始化
        console.log('发出请求unlogin');
        this.$store.dispatch('unlogin');
        //this.$store.dispatch('products/getAllProducts')
    },
    computed:mapState({
        products:state => state.products.all 
    }),
}
</script>
