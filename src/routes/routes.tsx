import { Root } from "@/layouts";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <div>Welcome to the Home Page</div>
            }
        ]
    }
]

export default routes;