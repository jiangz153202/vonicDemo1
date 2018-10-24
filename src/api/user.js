import $axios from '../libs/axios';
import modelConfig from './model.config';
export function getUserInfoList(){
    return new Promise((resolve,reject)=>{
        $axios.post(modelConfig.user.getUserInfoListUrl)
        .then(response=>{
            console.log('4收到数据 返回给下一层');    

            resolve(response.data)
        })
        .catch((error)=>{
            console.log(error);
            reject(error)
        })
    })
}

export default{
    getUserInfo(){
        return getUserInfoList()
    }
}