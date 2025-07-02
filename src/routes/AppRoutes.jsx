import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
import App from "../App";
import Checkout from "../pages/Checkout";


export const AppRoutes = createBrowserRouter([
    {path: '/', element: <App />,
        children: [
            {path: '/', element: <Home />},
            {path: '/about', element: <About /> },
            {path: '/cart',element: <Cart />  },
            {path: 'checkout', element: <Checkout />},
            {path: '/product/:id', element: <ProductDetail />  },
            {path: '*', element: <NotFound />}

        ]
    },
])