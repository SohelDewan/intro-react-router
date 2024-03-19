
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
        </div>
    );
};

export default SingalUser;