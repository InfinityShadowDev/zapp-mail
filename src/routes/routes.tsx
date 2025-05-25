import { Root } from "@/layouts";
import { Dashboard, Home } from "@/pages";
import type { RouteObject } from "react-router-dom";

const protectedRoutes: RouteObject[] = [
    {
        path: "/admin/dashboard",
        element: <Dashboard />,
        children: []
    }
]

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    ...protectedRoutes
]

export default routes;