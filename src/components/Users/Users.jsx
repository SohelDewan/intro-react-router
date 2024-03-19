import { useLoaderData } from "react-router-dom";
import SingalUser from "../SingalUser/SingalUser";
import './users.css';

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our users: {users.length}</h2>
            <p>Very Gentle users are here</p>
        <div className="users">
           {
            users.map(user=><SingalUser key={user.id} user={user}></SingalUser>)
           }
        </div>
        </div>
    );
};

export default Users;