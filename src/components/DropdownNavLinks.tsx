import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react";
import { NavLink } from "react-router";

const DropdownNavLinks = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
            <DropdownMenuContent className="w-max bg-yellow-700" align="end">
                <DropdownMenuItem>
                    <NavLink to="/">All Books</NavLink>
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