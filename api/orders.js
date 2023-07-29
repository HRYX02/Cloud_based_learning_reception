import request from '@/utils/request'

export default {

    /**
     * @description 生成订单
     * @param {*} courseId 
     * @returns 
     */
    createOrders(courseId) {
        return request({
            url: `/orderservice/order/createOrder/${courseId}`,
            method: 'post'
        })
    },

    /**
     * @description 根据订单id查询订单信息
     * @param {*} id 
     * @returns 
     */
    getOrdersInfo(id) {
        return request({
            url: `/orderservice/order/getOrderInfo/${id}`,
            method: 'get'
        })
    },

    /**
     * @description 生成二维码的方法
     * @param {*} orderNo 
     * @returns 
     */
    createNatvie(orderNo) {
        return request({
            url: '/orderservice/paylog/createNative/' + orderNo,
            method: 'get'
        })
    },

    /**
     * @description 查询订单状态的方法
     * @param {*} orderNo 
     * @returns 
     */
    queryPayStatus(orderNo) {
        return request({
            url: '/orderservice/paylog/queryPayStatus/' + orderNo,
            method: 'get'
        })
    }
}