import request from '@/utils/request'
export {get} from '@/api/common.js'

export function getDeptList(){
    return request({
        url:'/getDeptList',
        method: 'get'
    })
}

export function getSystemList(){
    return request({
        url: '/getSystemsList',
        method: 'get'
    })
}

export function getFence(){
    return request({
        url: '/fence/getFence',
        method: 'get'
    })
}
export function getPerson(){
    return request({
        url: '/user/list',
        method: 'get'
    })
}
export function getFenceList(){
    return request({
        url: '/fence/list',
        method: 'get'
    })
}
export function createFence(fence){
    return request({
        url: '/fence/create',
        method: 'post',
        data:fence
    })
}
export function deleteFenceById(id){
    return request({
        url: '/fence/delete',
        method: 'delete',
        params:{'id':id}
    })
}
export function createPerson(person){
    return request({
        url: '/user/create',
        method: 'post',
        data:person
    })
}

export function updateFenceById(fence){
    return request({
        url: '/fence/updateById',
        method: 'post',
        data:fence
    })
}
export function deletePersonById(id){
    return request({
        url: '/user/delete',
        method: 'delete',
        params:{'id':id}
    })
}