import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <>
            <div className={s.posts_form}>
                <h2>My posts</h2>
                <input type="text" placeholder='Your news...'></input>
                <button type='submit'>Send</button>
            </div>
            <ul className={s.posts}>
                <Post text="why nobody love me?" likes="14" />
                <Post text="Fuck all." likes="234" />
                <Post text="Where are you??" likes="2" />
            </ul>
        </>
    );
}

export default MyPosts;