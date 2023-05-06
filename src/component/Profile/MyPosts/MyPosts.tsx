import { useForm } from "react-hook-form";

import Post from './Post/Post';

import s from './MyPosts.module.css';

import { ProfileType } from '../../types/types';
import { FC } from "react";

type PropsType = {
    profile: ProfileType,
    posts: [],
    onCreatePost: () => void,
    onDeletePost: () => void,
}

const MyPosts: FC<PropsType> = ({profile, posts, onCreatePost, onDeletePost}) => {

    const onSubmit = (data) => {
        onCreatePost(data);
    }

    const onDelete = (id) => {
        onDeletePost(id);
    }

    const elements = posts.map(({postText, likes, id}) => <Post key={id} ava={profile?.photos.small} text={postText} likes={likes} onDelete={onDelete} id={id} />);

    return (
        <>
            <div className={s.posts_form}>
                <h2>My posts</h2>
                <PostForm 
                    onSubmit={onSubmit}
                />
            </div>
            <ul className={s.posts}>
                {elements}
            </ul>
        </>
    );
}

const PostForm = ({onSubmit}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className={errors.postText ? s.error : ''} {...register('postText', {required: "can't send empty post", minLength: {value: 1, message: 'Min length 1 symbol'}, maxLength: {value: 100, message: 'Max length message 100 symbols'}})} type="text" placeholder='Your news...'></input>
            {errors.postText && <span className={s.errorMessage}>{errors.postText.message}</span>}
            <button type='submit'>Send</button>
        </form>
    );
};

export default MyPosts;