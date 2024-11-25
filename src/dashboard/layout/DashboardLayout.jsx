import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import DashboardHeader from "../components/shared/DashboardHeader";
import { useState } from "react";

const DashboardLayout = () => {
    const [ isOpenSidebar, setIsOpenSidebar] = useState(true);

    
    return (
        <div className=" flex ">
            <Sidebar isOpenSidebar={isOpenSidebar}/>
            <div className= {`${isOpenSidebar ? "w-full ": "  w-full"}`}>
            <div className=" sticky top-0 z-40 w-full">
            <DashboardHeader isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
            </div>
             <div className=" h-[calc(100vh-60px)] overflow-y-auto custom-scrollbar">
             <Outlet />
             </div>
            </div>
        </div>
    );
};

export default DashboardLayout;