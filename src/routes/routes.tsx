import { DashboardLayout, RootLayout } from "@/layouts";
import { Home, SignUp } from "@/pages";
import type { RouteObject } from "react-router-dom";

const authRoutes: RouteObject[] = [
    {
        path: "/auth",
        element: <RootLayout />,
        children: [
            {
                path: "sign-up",
                element: <SignUp />
            }
        ]
    }
]

const dashboardRoutes: RouteObject[] = [
    {
        path: "/admin",
        element: <DashboardLayout />,
        children: [
            {
                path: "dashboard",
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
    ...authRoutes,
    ...dashboardRoutes
]

export default routes;