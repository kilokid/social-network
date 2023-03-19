import axios from "axios"

const request = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    'API-KEY': '9675b145-b3c3-4bd1-be1b-e370f493e960',
})

export const getUserRequest = (currentPage, pageSize) => {
    return request.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}

export const followUserRequest = (userId) => {
    return request.post(`follow/${userId}`)
        .then(response => {
            return response.data;
        })
}

export const unfollowUserRequest = (userId) => {
    return request.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
        })
}

export const getUserProfileRequest = (userId) => {
    return request.get(`profile/${userId}`)
        .then(response => {
            return response.data;
        })
}

export const getAuthInfoRequest = () => {
    return request.get('auth/me')
        .then(response => {
            return response.data;
        })
}

export const getProfilerStatusRequest = (userId) => {
    return request.get(`/profile/status/${userId}`)
    .then(response => {
        return response.statusText;
    })
}

export const setProfileStatusRequest = (status) => {
    return request.put(`/profile/status`, {status})
    .then(response => {
        return response.data;
    })
}