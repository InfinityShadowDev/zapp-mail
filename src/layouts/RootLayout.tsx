import { Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
    return (
        <div className="bg-neutral-50 min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default RootLayout;