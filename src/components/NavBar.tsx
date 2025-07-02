import { NavLink } from "react-router";
import DropdownNavLinks from "./DropdownNavLinks";
import { ModeToggle } from "./ThemeToggler";


const NavBar = () => {
    return (
        <nav className="sticky top-0 z-10 bg-opacity-30 backdrop-blur-md py-2 shadow-md">
            <div className="w-11/12 md:w-10/12 mx-auto flex justify-between items-center border-r-2">
                <div></div>
                <div className="flex justify-end items-center gap-3">
                    <div className="hidden md:flex justify-end items-center gap-3">
                        <NavLink to="/books">All Books</NavLink>
                        <NavLink to="/create-book">Add Book</NavLink>
                        <NavLink to="/borrow-summary">Borrow Summary</NavLink>
                    </div>
                    <div className="md:hidden">
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