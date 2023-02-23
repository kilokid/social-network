import { createRef } from 'react';

import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = ({posts, addPost}) => {
    const inputRef = createRef();

    const createPost = () => {
        const text = inputRef.current.value;
        addPost(text);
        inputRef.current.value = '';
    }

    return (
        <>
            <div className={s.posts_form}>
                <h2>My posts</h2>
                <input ref={inputRef} type="text" placeholder='Your news...'></input>
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