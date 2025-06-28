import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";


export const AppRoutes = createBrowserRouter([
    {path: '/', element: <Navbar />,
        children: [
            {path: '/', element: <Home />},
            {path: '/about', element: <About /> },
            {path: '/cart',element: <Cart />  },
            {path: '/product/:id',element: <ProductDetail />  },
            {path: '*', element: <NotFound />}
        ]
    },
])