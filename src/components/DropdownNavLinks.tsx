import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavLink } from "react-router";

const DropdownNavLinks = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <NavLink to="/books">All Books</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <NavLink to="/create-book">Add Book</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <NavLink to="/borrow-summary">Borrow Summary</NavLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownNavLinks;