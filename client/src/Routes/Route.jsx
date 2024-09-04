
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CompanyDetails from "../page/CompanyDetails/CompanyDetails";
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
            }
        ]
    },
]);

