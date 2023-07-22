import axios from 'axios'
import cookie from 'js-cookie'

// 创建axios实例
const service = axios.create({
    // api的base_url
    baseURL: 'http://localhost:8080',
    timeout: 20000
})
service.interceptors.request.use(
    config => {
        // 判断cookie里面是否有名称为yunShang_token的数据
        if (cookie.get('yunShang_token')) {
            // 把获取cookie值放到header中
            config.headers['token'] = cookie.get('yunShang_token');
        }
        return config
    },
    err => {
        return Promise.reject(err);
    }
)
export default service