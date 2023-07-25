import request from '@/utils/request'
export default {
  getPlayAuth(id) {
    return request({
      url: `/vodservice/video/getPlayAuth/${id}`,
      method: 'get'
    })
  }

}