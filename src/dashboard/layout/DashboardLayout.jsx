import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import DashboardHeader from "../components/shared/DashboardHeader";
import { useState } from "react";

const DashboardLayout = () => {
    const [ isOpenSidebar, setIsOpenSidebar] = useState(true);

    
    return (
        <div className=" flex">
            <Sidebar isOpenSidebar={isOpenSidebar}/>
            <div className= {`${isOpenSidebar ? " ": "  w-full"}`}>
            <DashboardHeader isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
            <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;