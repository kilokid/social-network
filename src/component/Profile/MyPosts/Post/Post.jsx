import s from './Post.module.css';

const Post = ({text}) => {
    return (
        <li className={s.post}>
            <span></span>
            <p>{text}</p>
        </li>
    );
}

export default Post;