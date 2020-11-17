import service from '../utils/request'

export function login(data) {
    return service.request({
        url: 'login',
        method: 'post',
        data, //请求类型post
        // params: data, //请求类型get
    })
}