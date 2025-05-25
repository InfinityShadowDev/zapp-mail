import { DashboardLayout, RootLayout } from "@/layouts";
import { Home } from "@/pages";
import type { RouteObject } from "react-router-dom";

const protectedRoutes: RouteObject[] = [
    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]

const routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
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