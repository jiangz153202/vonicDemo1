/**
 * Mocking client-server processing
 */
const _products = [
    {"id":1,"title":"ipad 1 Mini","price":100.01,"inventory":2},
    {"id":2,"title":"ipad 2 Mini","price":200.01,"inventory":6},
    {"id":2,"title":"ipad 3 Mini","price":300.01,"inventory":1},
    {"id":3,"title":"ipad 4 Mini","price":400.01,"inventory":4},
]

export default{
    getProducts (cb){
        setTimeout(()=> cb(_products),100)
    },
    buyProducts (products,cb,errorCb){
        setTimeout(()=>{
            //simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
            ? cb()
            : errorCb()
        }, 100)
    }
}

