import request from '@/utils/request'

export default {

    /**
     * @description 分页课程查询的方法
     * @param {*} page 
     * @param {*} limit 
     * @returns 
     */
    getCourseList(page, limit, courseQuery) {
        return request({
            url: `/eduservice/courseReception/getCourseList/${page}/${limit}`,
            method: 'post',
            data: courseQuery
        })
    },

    /**
     * @description 查询所有分类
     * @param {*} id 
     * @returns 
     */
    getAllSubject() {
        return request({
            url: '/eduservice/courseReception/getAllSubject',
            method: 'get'
        })
    },

    /**
     * @description 课程详情的方法
     * @param {*} id 
     * @returns 
     */
    getCourseInfo(id) {
        return request({
            url: `/eduservice/courseReception/getCourseInfo/${id}`,
            method: 'get'
        })
    }
}