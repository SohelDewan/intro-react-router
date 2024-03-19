import { Link } from 'react-router-dom';
const SingalUser = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle ={
        border: '2px solid green',
        padding: '20px',
        borderRadius: '10px'
    }

    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>View User</button>
            </Link>
        </div>
    );
};

export default SingalUser;