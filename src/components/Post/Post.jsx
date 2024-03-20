import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {
    const {id, title} = post;
    const postStyle ={
        border: '2px solid green',
        padding: '20px',
        borderRadius: '10px'
    }
    const navigate = useNavigate();
    const handleDetail = ()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h3>Post: {id}</h3>
            <p>Post: {title}</p>
            {/* <Link to={`/post/${id}`}>View Post</Link> */}
            <Link to={`/post/${id}`}>
                <button>View Post</button>
            </Link>
            <button onClick={handleDetail}>click to details</button>
        </div>
    );
};

export default Post;