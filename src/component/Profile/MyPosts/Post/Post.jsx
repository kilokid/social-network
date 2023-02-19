import s from './Post.module.css';

const Post = ({text, likes}) => {
    return (
        <li className={s.post}>
            <span></span>
            <div>
                <p>{text}</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ei-like.svg/1200px-Ei-like.svg.png" />
                <span>{likes}</span>
            </div>

        </li>
    );
}

export default Post;