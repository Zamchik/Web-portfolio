import {createRoot} from "react-dom/client";
import {App} from "@/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {ThemeProvider} from "@/components/ThemeProvider";

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}
const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // {
            //     path: '/about',
            //     element:<Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
            // },
            // {
            //     path: '/shop',
            //     element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>
            // }
        ]
    },
]);

container.render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
)