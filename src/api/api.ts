import axios from "axios"

import { UserType, ProfileType, PhotosType, ResultCodesEnum} from "../types/types"

const request = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a39023d4-2233-4bb7-8239-220bc0cf0e59',
    }
})

type UsersType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null,
}

export const getUserRequest = (currentPage: number, pageSize: number) => {
    return request.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}

type FollowType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: any
}

export const followUserRequest = (userId: number) => {
    return request.post<FollowType>(`follow/${userId}`)
        .then(response => {
            return response.data;
        })
}

export const unfollowUserRequest = (userId: number) => {
    return request.delete<FollowType>(`follow/${userId}`)
        .then(response => {
            return response.data;
        })
}

export const getUserProfileRequest = (userId: number) => {
    return request.get<ProfileType>(`profile/${userId}`)
        .then(response => {
            return response.data;
        })
}

type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodesEnum,
    messages: Array<string>,
}

export const getAuthInfoRequest = () => {
    return request.get<MeResponseType>('auth/me')
        .then(response => {
            return response.data;
        })
}

export const getProfilerStatusRequest = (userId: number) => {
    return request.get(`profile/status/${userId}`)
    .then(response => {
        return response.data;
    })
}

export const setProfileStatusRequest = (status: string) => {
    return request.put<FollowType>(`profile/status`, {status})
    .then(response => {
        return response.data;
    })
}

type LoginResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: {
      userId: number
    }
}

export const setLoginDataRequest = ({email, password, rememberMe, captcha = null}) => {
    return request.post<LoginResponseType>('auth/login', {
        email,
        password,
        rememberMe,
        captcha,
    })
    .then(response => {
        return response.data;
    })
}

export const logoutRequest = () => {
    return request.delete<FollowType>('auth/login')
    .then(response => {
        return response.data;
    }) 
}

type ProfilePhotoResponseType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: PhotosType
}

export const setProfilePhotosRequest = (file) => {
    const formData = new FormData();
    formData.append('image', file);

    return request.put<ProfilePhotoResponseType>('profile/photo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {
        return response.data;
    }) 
}

export const setProfileInfoRequest = (profile: ProfileType) => {
    return request.put<FollowType>('profile', profile)
    .then(response => {
        return response.data;
    }) 
}

type CaptchaType = {
    url: string,
}

export const getCaptchaUrlRequest = () => {
    return request.get<CaptchaType>('security/get-captcha-url')
    .then(response => {
        return response.data;
    }) 
}