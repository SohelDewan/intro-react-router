import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is the home component</h2>
            <Outlet></Outlet>
            <footer>Footer my foot</footer>
        </div>
    );
};

export default Home;