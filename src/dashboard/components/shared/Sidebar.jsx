import { useState } from "react";
import { BiReset } from "react-icons/bi";
import { FaHome, FaUsers } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { RiProfileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo_2 from "../../../images/logo.png"
import "./sidebar.css"
import { MdDisplaySettings, MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineEventSeat } from "react-icons/md";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { SiCoinmarketcap } from "react-icons/si";
import { GrDocumentConfig } from "react-icons/gr";


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
    name: "Events",
    path: "#",
    icon: <MdOutlineEventSeat />,
    subMenu: [
      { name: "Add Event", path: `${baseRoute}/add-event` },
      { name: "All Events", path: `${baseRoute}/all-events` },
    ]
  },
  {
      name: "Marketing",
      path: `#`,
      icon: <SiCoinmarketcap />      ,
      subMenu: [
          { name: "Newsletter", path: `${baseRoute}/newsletter` },
          { name: "Subscribers", path: `${baseRoute}/subscribers` }
      ]
  },
  {
      name: "Website Setup",
      path: `#`,
      icon: <MdDisplaySettings />,
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
      icon: <GrDocumentConfig />      ,
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
      icon: <FaUsers />      ,
      subMenu: [
          { name: "All Staff", path: `${baseRoute}/all-staff` },
          { name: "Staff Permission", path: `${baseRoute}/staff-permission` }
      ]
  },

];



const Sidebar = ({isOpenSidebar}) => {
    const [activeMenu, setActiveMenu] = useState(null);
    




    // Toggle submenu visibility
  const toggleSubMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };


    return (
        <div className = { `${isOpenSidebar ? " block ": "hidden"} bg-gray-800  h-screen  overflow-y-auto custom-scrollbar p-2  min-w-[250px]`}>
              <img src={logo_2} alt="" className=" mb-3 w-64"/>
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
                            {activeMenu === item.name ? <MdKeyboardArrowDown />: <MdKeyboardArrowRight />  }
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
                                  <span className=" flex gap-1 items-center">
                                  <IoArrowRedoCircleOutline />
                                  {subItem.name}
                                    </span>
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