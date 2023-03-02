import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

import MyPosts from './MyPosts';

const MyPostsContainer = ({posts, dispatch, inputText}) => {
    const onCreatePost = () => {
        dispatch(addPostActionCreator())
    }

    const onChangePost = (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts posts={posts} inputText={inputText} changePost={onChangePost} onCreatePost={onCreatePost}  />
    );
}

export default MyPostsContainer;