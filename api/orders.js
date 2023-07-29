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
}