import { useState } from "react";
import { BiReset } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { RiProfileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo_2 from "../../../images/logo-2.png"
import "./sidebar.css"
import { MdOutlineEventSeat } from "react-icons/md";


const baseRoute = "/dashboard"

const userMenuItems = [
  { name: "Dashboard", path: `${baseRoute}`, icon: <FaHome /> },
  {
      name: "Blog System",
      path: `#`,
      icon: <RiProfileFill />,
      subMenu: [
          { name: "All blogs", path: `${baseRoute}/all-posts` },
          { name: "Categories", path: `${baseRoute}/categories` }
      ]
  },
  {
      name: "Marketing",
      path: `#`,
      icon: <RiProfileFill />,
      subMenu: [
          { name: "Newsletter", path: `${baseRoute}/newsletter` },
          { name: "Subscribers", path: `${baseRoute}/subscribers` }
      ]
  },
  {
      name: "Website Setup",
      path: `#`,
      icon: <RiProfileFill />,
      subMenu: [
          { name: "Header", path: `${baseRoute}/header` },
          { name: "Footer", path: `${baseRoute}/footer` },
          { name: "Pages", path: `${baseRoute}/pages` },
          { name: "Appearance", path: `${baseRoute}/appearance` }
      ]
  },
  {
      name: "Setup & onfiguration",
      path: `#`,
      icon: <RiProfileFill />,
      subMenu: [
          { name: "General Setting", path: `${baseRoute}/general-setting` },
          { name: "SMTP Setting", path: `${baseRoute}/smtp-setting` },
          { name: "Payment Methods", path: `${baseRoute}/payment-methods` },
          { name: "Social Media Login", path: `${baseRoute}/social-media-login` }
      ]
  },
  {
      name: "Staff",
      path: `#`,
      icon: <RiProfileFill />,
      subMenu: [
          { name: "All Staff", path: `${baseRoute}/all-staff` },
          { name: "Staff Permission", path: `${baseRoute}/staff-permission` }
      ]
  },
  {
    name: "Events",
    path: "#",
    icon: <MdOutlineEventSeat />,
    subMenu: [
      { name: "Add Event", path: `${baseRoute}/add-event` },
      { name: "All Events", path: `${baseRoute}/all-events` },
    ]
  },
  { name: "Reset Password", path: `${baseRoute}/reset-password`, icon: <BiReset /> }
];



const Sidebar = ({isOpenSidebar}) => {
    const [activeMenu, setActiveMenu] = useState(null);
    




    // Toggle submenu visibility
  const toggleSubMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };


    return (
        <div className = { `${isOpenSidebar ? " block ": "hidden"} bg-gray-800 h-screen  overflow-y-auto p-2 custom-scrollbar min-w-[250px]`}>
              <img src={logo_2} alt="" className=" mb-3"/>
          {
             userMenuItems.map((item, index) => (
                    <div key={index} className="mb-2 text-[15px]">
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