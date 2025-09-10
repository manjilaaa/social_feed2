import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  IoIosLogOut,
  IoIosHome,
  IoIosAdd,
  IoIosMenu,
  IoIosClose,
} from "react-icons/io";

const Sidebar = ({ onLogoutClick }) => {
  const [userEmail, setUserEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
    
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-md shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
      </button>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      
      <div
        className={`w-64 bg-gradient-to-b from-purple-100 to-pink-100 shadow-lg h-screen p-6 flex flex-col relative border-r border-purple-200 fixed md:relative z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
       
        <div className="mb-10 mt-4">
          <h1 className="text-2xl font-bold text-purple-700 text-center">
            SocialFeed
          </h1>
          <p className="text-xs text-purple-500 text-center">
            Share your moments
          </p>
        </div>

        
        <div className="flex-grow">
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/post"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold flex items-center p-3 rounded-lg bg-purple-500"
                    : "flex items-center p-3 rounded-lg text-gray-700 hover:bg-purple-500 hover:text-white transition-all duration-300 group"
                }
                onClick={handleLinkClick}
              >
                {({ isActive }) => (
                  <>
                    <IoIosHome
                      className={`mr-3 ${
                        isActive
                          ? "text-white"
                          : "text-purple-500 group-hover:text-white"
                      }`}
                      size={20}
                    />
                    <span className="font-medium">Feed</span>
                  </>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold flex items-center p-3 rounded-lg bg-purple-500"
                    : "flex items-center p-3 rounded-lg text-gray-700 hover:bg-purple-500 hover:text-white transition-all duration-300 group"
                }
                onClick={handleLinkClick}
              >
                {({ isActive }) => (
                  <>
                    <IoIosAdd
                      className={`mr-3 ${
                        isActive
                          ? "text-white"
                          : "text-purple-500 group-hover:text-white"
                      }`}
                      size={24}
                    />
                    <span className="font-medium">Add Post</span>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

       
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-purple-200 pt-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
              {userEmail ? userEmail.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-700 truncate max-w-[120px]">
                {userEmail}
              </p>
            </div>
          </div>
          <button
            title="Logout"
            className="text-purple-600 hover:text-purple-800 p-2 rounded-full hover:bg-purple-100 transition-colors duration-300"
            onClick={onLogoutClick}
          >
            <IoIosLogOut size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
