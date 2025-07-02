import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";


const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="w-11/12 md:w-10/12 mx-auto min-h-[89vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;