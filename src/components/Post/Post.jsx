import { Link } from "react-router-dom";
const Post = ({post}) => {
    const {id, title} = post;
    const postStyle ={
        border: '2px solid green',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={postStyle}>
            <h3>Post: {id}</h3>
            <p>Post: {title}</p>
            {/* <Link to={`/post/${id}`}>View Post</Link> */}
            <Link to={`/post/${id}`}>
                <button>View Post</button>
            </Link>
        </div>
    );
};

export default Post;