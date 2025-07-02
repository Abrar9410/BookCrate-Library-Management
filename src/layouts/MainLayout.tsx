import { Outlet } from "react-router";
import NavBar from "../components/NavBar";


const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;