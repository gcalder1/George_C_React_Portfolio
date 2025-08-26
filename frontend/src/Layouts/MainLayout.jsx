import { Outlet } from "react-router-dom";
import { NavigationContainer } from "../components/NavigationContainer";
import { BottomBar } from "../components/BottomBar";


export const Layout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-0">
      <div className="w-full max-w-4xl h-screen bg-[#BFC0CF]/50 backdrop-blur-xs
      rounded-none shadow-xl overflow-y-auto p-10">
        <NavigationContainer />
        <Outlet />
        <BottomBar />
      </div>
    </div>
  )
}