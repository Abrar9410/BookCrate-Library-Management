import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Books from "@/pages/Books";
import CreateBook from "@/pages/CreateBook";
import BorrowSummary from "@/pages/BorrowSummary";
import SingleBook from "@/pages/SingleBook";


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
                path: "/borrow-summary",
                element: <BorrowSummary/>
            }
        ]
    }
])

export default router;