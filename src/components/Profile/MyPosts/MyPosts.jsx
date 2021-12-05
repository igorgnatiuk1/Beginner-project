import Post from "./Post/Post";
import React from "react";

const MyPosts = ({post, addPost, newPostText, newValue}) => {
    const posts = post.map(p => <Post message={p.message} id={p.id}/>)
    const newPost = React.createRef();
    const addBut = () => {
        addPost()
    }
    const newValueChange = () => {
        const text = newPost.current.value;
        newValue(text)
    }
    return (
        <div>
            <div>My posts</div>
            <textarea ref={newPost} value={newPostText} onChange={newValueChange}></textarea>
            <button onClick={addBut}>ADD</button>
            {posts}
        </div>
    )
}
export default MyPosts;
