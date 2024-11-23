import { useState } from "react";
import { BiReset } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { RiProfileFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const baseRoute = "/dashboard"

    // users sidebar menues
    const userMenuItems = [
        { name: "My Profile", path: `${baseRoute}`, icon: <FaPersonRifle /> },
        { name: "Upload PDF", path: `${baseRoute}/upload-pdf`, icon: <RiProfileFill /> },
        { name: "Reset Password", path: `${baseRoute}/reset-password`, icon: <BiReset /> },
      ];

        // Toggle submenu visibility
  const toggleSubMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };
    return (
        <div className="bg-gray-800 min-h-screen p-2">
            <h2 className=" mt-4 text-2xl text-white"> <Link to={"/"}> AQS Foundation </Link> </h2>
            <div> <Link to={"/"} className=" flex gap-2 mt-2 p-2 items-center text-gray-400"> <FaHome /> Home </Link></div>
          {
                 userMenuItems.map((item, index) => (
                    <div key={index} className="mb-2">
                      {/* If the menu has a submenu */}
                      {item.subMenu ? (
                        <>
                          <button
                            onClick={() => toggleSubMenu(item.name)}
                            className="flex  justify-between items-center p-2 w-full text-left text-gray-400 hover:bg-gray-700 hover:rounded-md hover:text-white"
                          >
                            <span className=" flex gap-2">
                              {item.icon}
                              {item.name}
                            </span>
                            {activeMenu === item.name ? "^" : ">"}
                          </button>
                          {/* Submenu items */}
                          {activeMenu === item.name && (
                            <div className="pl-4">
                              {item.subMenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="block p-2 text-gray-400 hover:bg-gray-700 hover:rounded-md hover:text-white"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className="flex gap-2 items-center p-2 text-gray-400 hover:bg-gray-700 hover:rounded-md hover:text-white"
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))
          }
        </div>
    );
};

export default Sidebar;