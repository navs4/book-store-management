import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from '../pages/HomePage'
import Books from "../pages/Books";
import Reports from "../pages/Reports";
import Orders from "../pages/Orders";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },

            {
                path: 'books',
                element: <Books />
            },

            {
                path: '/reports',
                element: <Reports/>
            },
        
        
            {
                path: '/orders',
                element: <Orders/>
            }
        ]
    }
]);




function Routes() {
    return <RouterProvider router={routes} />
}


export default Routes;