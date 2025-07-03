import { Link, NavLink } from "react-router";
import DropdownNavLinks from "./DropdownNavLinks";
import { ModeToggle } from "./ThemeToggler";
import logo from "../assets/book-crate-logo.PNG";

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-10 bg-opacity-30 backdrop-blur-md py-2 shadow-md bg-yellow-700">
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-64 h-14"/>
                </Link>
                <div className="flex justify-end items-center gap-5">
                    <div className="hidden lg:flex justify-end items-center gap-5 text-xl text-white">
                        <NavLink to="/" className="hover:text-[rgb(49,1,1)]">All Books</NavLink>
                        <NavLink to="/create-book" className="hover:text-[rgb(49,1,1)]">Add Book</NavLink>
                        <NavLink to="/borrow-summary" className="hover:text-[rgb(49,1,1)]">Borrow Summary</NavLink>
                    </div>
                    <div className="lg:hidden">
                        <DropdownNavLinks/>
                    </div>
                    <div>
                        <ModeToggle/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;