import { navItems } from "./data";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-neutral-50 px-5 py-4 w-full flex justify-between items-center">
            <div className="flex gap-10 justify-start items-center bg-red-300 ">
                <h1 className="text-2xl font-bold text-neutral-900">ZappMail</h1>
                <ul className="flex gap-5">
                    {navItems.map((item) => (
                        <a href={item.path} key={item.path}>
                            <li>{item.name}</li>
                        </a>
                    ))}
                </ul>
            </div>
            <div className="flex gap-5 justify-start items-center bg-red-300 ">
                <h1 className="text-2xl font-bold text-neutral-900">ZappMail</h1>
                <ul className="flex gap-5">
                    {navItems.map((item) => (
                        <a href={item.path} key={item.path}>
                            <li>{item.name}</li>
                        </a>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;