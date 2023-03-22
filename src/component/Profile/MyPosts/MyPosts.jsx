import { useForm } from "react-hook-form";

import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = ({posts, onCreatePost}) => {

    const onSubmit = (data) => {
        onCreatePost(data);
    }

    const elements = posts.map(({text, likes, id}) => <Post key={id} text={text} likes={likes} id={id} />);

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
    const {register, handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('postText')} type="text" placeholder='Your news...'></input>
            <button type='submit'>Send</button>
        </form>
    );
};

export default MyPosts;