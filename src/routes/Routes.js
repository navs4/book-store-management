import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from '../pages/HomePage'
import Books from "../pages/Books";
import Reports from "../pages/Reports";
import Orders from "../pages/Orders";
import BookDetailsPage from "../pages/BookDetailsPage";
import CheckoutPage from "../pages/CheckoutPage";

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
            },

            {
                path: 'books/:bookId',
                element: <BookDetailsPage />
            },


            {
                path: '/checkout',
                element: <CheckoutPage />
            },
        ]
    }
]);




function Routes() {
    return <RouterProvider router={routes} />
}


export default Routes;