import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Books from "@/pages/Books";
import CreateBook from "@/pages/CreateBook";
import BorrowSummary from "@/pages/BorrowSummary";
import SingleBook from "@/pages/SingleBook";
import EditBook from "@/pages/EditBook";
import BorrowBook from "@/pages/BorrowBook";
import ErrorPage from "@/pages/ErrorPage";
import Contact from "@/pages/Contact";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage/>,
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
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/terms-of-service",
                element: <TermsOfService/>
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy/>
            },
            {
                path: "/cookie-policy",
                element: <CookiePolicy/>
            },
        ]
    }
])

export default router;