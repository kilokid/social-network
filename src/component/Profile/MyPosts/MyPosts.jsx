import { createRef } from 'react';
import { useForm } from "react-hook-form";

import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = ({posts, inputText, changePost, onCreatePost}) => {
    const inputRef = createRef();

    const onChangePost = () => {
        const text = inputRef.current.value;
        changePost(text)
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    const elements = posts.map(({text, likes, id}) => <Post key={id} text={text} likes={likes} id={id} />);

    return (
        <>
            <div className={s.posts_form}>
                <h2>My posts</h2>
                <PostForm 
                    onChangePost={onChangePost}
                    inputRef={inputRef}
                    inputText={inputText}
                    onCreatePost={onCreatePost}
                    onSubmit={onSubmit}
                />
            </div>
            <ul className={s.posts}>
                {elements}
            </ul>
        </>
    );
}

const PostForm = ({onSubmit, onChangePost, inputRef, inputText, onCreatePost}) => {
    const {register, handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('postText')} onChange={onChangePost} ref={inputRef} value={inputText} type="text" placeholder='Your news...'></input>
            <button onClick={onCreatePost} type='submit'>Send</button>
        </form>
    );
};

export default MyPosts;