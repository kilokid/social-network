import { createRef } from 'react';

import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = ({posts, inputText, changePost, onCreatePost}) => {
    const inputRef = createRef();

    const onChangePost = () => {
        const text = inputRef.current.value;
        changePost(text)
    }

    const elements = posts.map(({text, likes, id}) => <Post key={id} text={text} likes={likes} id={id} />);

    return (
        <>
            <div className={s.posts_form}>
                <h2>My posts</h2>
                <input onChange={onChangePost} ref={inputRef} value={inputText} type="text" placeholder='Your news...'></input>
                <button onClick={onCreatePost} type='submit'>Send</button>
            </div>
            <ul className={s.posts}>
                {elements}
            </ul>
        </>
    );
}

export default MyPosts;