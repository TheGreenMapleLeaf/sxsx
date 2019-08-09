import axios from "axios";
import qs from "qs"
import Loading from "lib/loading/index.js"
let vm=Loading();
const server = axios.create({
    timeout:5000,
    withCredentials:true//表示跨域请求时是否需要使用凭证
})

//interceptors(拦截器) 每个请求都需要携带 token ，所以我们可以使用 axios request 拦截器
server.interceptors.request.use((config)=>{
    if(config.method.toUpperCase() == "GET"){

    }else if(config.method.toUpperCase() == "POST"){
        config.headers["content-type"] = "appliaction/x-www-form-urlencoded";
    }
    vm.mountHandler()
    return config;
},(err)=>{
    Promise.reject(err);//返回错误提示
})

server.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        vm.destoryHandler()
        return res.data
    }
},(err)=>{
    Promise.reject(err)//返回错误提示
})


export default (method,url,data={})=>{
    if(method.toUpperCase() == "GET"){
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data);
    }
}
