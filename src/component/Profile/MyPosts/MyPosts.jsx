import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = () => {
    const postsData = [
        {
            id: '0',
            text: 'why nobody love me?',
            likes: '14'
        },
        {
            id: '1',
            text: 'Fuck all.',
            likes: '234'
        },
        {
            id: '2',
            text: 'Where a u??',
            likes: '2'
        }
    ]

    return (
        <>
            <div className={s.posts_form}>
                <h2>My posts</h2>
                <input type="text" placeholder='Your news...'></input>
                <button type='submit'>Send</button>
            </div>
            <ul className={s.posts}>
                {postsData.map(({text, likes, id}) => {
                    return <Post text={text} likes={likes} id={id} />
                })}
            </ul>
        </>
    );
}

export default MyPosts;