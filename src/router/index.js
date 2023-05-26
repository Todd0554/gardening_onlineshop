import React from "react";

const Home = React.lazy(() => import('../pages/Home'));
const Products = React.lazy(() => import('../pages/Products'));
const Product = React.lazy(() => import('../pages/Product'));

export const router = [
    {
        path:"",
        element: Home
    },
    {
        path:"/products",
        element: Products
    },
    {
        path:"/product/:id",
        element: Product
    }
]