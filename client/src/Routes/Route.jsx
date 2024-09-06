
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddCompanyInfo from "../page/AddCompanyInfo/AddCompanyInfo";
import CompanyDetails from "../page/CompanyDetails/CompanyDetails";
import CompanyUpdate from "../page/CompanyUpdate/CompanyUpdate";
import Home from "../page/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/company/:id",
                element: <CompanyDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/company/${params.id}`)
            },
            {
                path: "/add-company-info",
                element: <AddCompanyInfo/>
            },
            {
                path: '/company-update/:id',
                element: <CompanyUpdate />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/company-update/${params.id}`)
            }
        ]
    },
]);

