import { createRef } from 'react';

import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

import s from './MyPosts.module.css';

const MyPosts = ({posts, dispatch, inputText}) => {
    const inputRef = createRef();

    const createPost = () => {
        dispatch(addPostActionCreator())
    }

    const onChangePost = () => {
        const text = inputRef.current.value;
        dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <>
            <div className={s.posts_form}>
                <h2>My posts</h2>
                <input onChange={onChangePost} ref={inputRef} value={inputText} type="text" placeholder='Your news...'></input>
                <button onClick={createPost} type='submit'>Send</button>
            </div>
            <ul className={s.posts}>
                {posts.map(({text, likes, id}) => {
                    return <Post key={id} text={text} likes={likes} id={id} />
                })}
            </ul>
        </>
    );
}

export default MyPosts;