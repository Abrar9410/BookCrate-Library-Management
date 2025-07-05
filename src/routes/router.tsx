import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Books from "@/pages/Books";
import CreateBook from "@/pages/CreateBook";
import BorrowSummary from "@/pages/BorrowSummary";
import SingleBook from "@/pages/SingleBook";
import EditBook from "@/pages/EditBook";
import BorrowBook from "@/pages/BorrowBook";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Books/>
            },
            {
                path: "/books",
                element: <Books/>
            },
            {
                path: "/books/:id",
                element: <SingleBook/>
            },
            {
                path: "/create-book",
                element: <CreateBook/>
            },
            {
                path: "edit-book/:id",
                element: <EditBook />
            },
            {
                path: "borrow/:bookId",
                element: <BorrowBook/>
            },
            {
                path: "/borrow-summary",
                element: <BorrowSummary/>
            }
        ]
    }
])

export default router;