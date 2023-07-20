import axios from 'axios'
// 创建axios实例
const service = axios.create({
    // api的base_url
    baseURL: 'http://localhost:8080',
    timeout: 20000
})
export default service