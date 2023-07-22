import request from '@/utils/request'

export default {
    //根据手机号码发送短信
    sendCode(phone) {
        return request({
            url: `/msmservice/msm/send/${phone}`,
            method: 'get'
        })
    },
    //用户注册
    registerMember(registerVo) {
        return request({
            url: `/ucenterservice/member/register`,
            method: 'post',
            data: registerVo
        })
    }
}