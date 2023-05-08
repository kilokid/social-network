export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type PhotosType = {
    small: string | null,
    large: string | null
}

export type ProfileType = {
    userId: number | null,
    lookingForAJob: string | null,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    contacts: ContactsType,
    photos: PhotosType,
    aboutMe?: string,
}

export type PostDataType = {
    id: number,
    postText: string,
    likes: string
}

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}

export type FriendType = {
    id: number,
    name: string,
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10,
}