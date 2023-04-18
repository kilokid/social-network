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
    userId: number,
    lookingForAJob: string,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType
}

export type PostDataType = {
    id: string,
    text: string,
    likes: string
}

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}