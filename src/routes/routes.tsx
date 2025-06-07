import { DashboardLayout, RootLayout } from "@/layouts";
import { Home } from "@/pages";
import type { RouteObject } from "react-router-dom";

const protectedRoutes: RouteObject[] = [
    {
        path: "/admin",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
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