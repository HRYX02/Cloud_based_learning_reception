import request from '@/utils/request'

export default {

    /**
     * @description 分页讲师查询的方法
     * @param {*} page 
     * @param {*} limit 
     * @returns 
     */
    getTeacherList(page, limit) {
        return request({
            url: `/eduservice/teacherReception/getTeacherList/${page}/${limit}`,
            method: 'post'
        })
    },

    /**
     * @description 讲师详情的方法
     * @param {*} id 
     * @returns 
     */
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacherReception/getTeacherInfo/${id}`,
            method: 'get'
        })
    }
}