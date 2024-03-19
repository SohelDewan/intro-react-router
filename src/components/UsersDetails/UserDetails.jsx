import { useLoaderData } from "react-router-dom";
const UserDetails = () => {
    const  user  = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h3>User Details : {name}</h3>
            <h4>User website : {website}</h4>

        </div>
    );
};

export default UserDetails;