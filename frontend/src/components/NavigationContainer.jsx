import { NavBar } from "./NavBar.jsx";
import { Logo } from "./Logo.jsx";

export const NavigationContainer = () => {
    return (
        <div className="flex items-center p-4 justify-between bg-none">
            <NavBar />
            <Logo />
        </div>
    )
}