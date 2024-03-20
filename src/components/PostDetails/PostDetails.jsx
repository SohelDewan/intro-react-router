import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id, title, body} = post;

    const handleBack = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post details about:{id}</h3>
            <p>title: {title}</p>
            <p><small>Body: {body}</small></p>
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export default PostDetails;