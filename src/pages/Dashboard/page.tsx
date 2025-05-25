import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <Outlet />
        </div>
    );
}

export default Dashboard;