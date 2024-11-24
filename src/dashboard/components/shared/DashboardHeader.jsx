import { SiWebpack } from "react-icons/si";
import { Link } from "react-router-dom";


const DashboardHeader = ({ isOpenSidebar, setIsOpenSidebar}) => {


  
   
  return (
    <header className=" bg-gray-100 dark:bg-gray-900 h-[60px] w-full px-4 py-2 shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Side: Menu Toggle and Create Dropdown */}
        <div className="flex items-center space-x-4">
          {/* Menu Icon */}
          <button 
          onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>


          <p className=" bg-slate-300 p-2 rounded-full">
          <Link to={"/"}>         
           <SiWebpack />
          </Link>
          </p>
  
        </div>



        {/* Right Side: Icons and Profile */}
        <div className="flex items-center space-x-6">
    

          {/* Notifications */}
          <div className="relative">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>


          </div>

          {/* Profile */}
          {
           <div className=" flex gap-3 items-center">
              <img
            className="w-11 h-11 rounded-full"
            src={"#"}
            alt="Profile"
          />
          <span>         
            
          <p>Name</p>
          <p className=" text-xs opacity-75">Role</p>
          </span>

           </div>
          }
         
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
