import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsPerson,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { AiOutlineFileText, AiOutlineSetting } from "react-icons/ai";
import logo from "../assets/logo.png";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };
  const [open, setOpen] = useState(true);
  const [submenuopen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Channels",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Dummy Channel 1" },
        { title: "Dummy Channel 2" },
        { title: "Dummy Channel 3" },
      ],
    },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
  ];

  return (
    <div
      className={`bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900 ${
        open ? "w-72" : "w-20"
      } h-screen p-5 pt-8 relative duration-200`}
    >
      <BsArrowLeftShort
        className={`bg-white text-3xl rounded-full absolute -right-3 top-9 border border-blue-600 cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      />

      <div className="flex justify-center">
        <Link to='/home'>
        <img
          src={logo}
          alt="logo"
          className="w-36 duration-500 rotate-[360deg]"
        />
        </Link>
      </div>

      <div
        className={`flex items-center rounded-md bg-[#ffffff2e] mt-6 ${
          !open ? "px-2.5" : "px-4"
        } py-2`}
      >
        <BsSearch
          className={`text-white text-lg block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />
        <input
          type="text"
          placeholder="search..."
          className={`text-base bg-transparent w-full text-white focus:outline-none border-none placeholder-white ${
            !open && "hidden"
          }`}
        />
      </div>

      <ul className="pt-2">
        {Menus.map((menu, index) => {
          return (
            <div key={index}>
              <li
                
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#ffffff2e] rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuopen && "rotate-180"}`}
                    onClick={() => {
                      setSubmenuOpen(!submenuopen);
                    }}
                  />
                )}
              </li>
              {menu.submenu && submenuopen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => {
                    return (
                      <div key={index}>
                      <li
                        className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-[#ffffff2e] rounded-md ${
                          menu.spacing ? "mt-9" : "mt-2"
                        }`}
                      >
                        {submenuItems.title}
                      </li>
                      </div>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
        {open && (
          <li className="mt-10">
            <button
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 duration-500 md:ml-8"
              onClick={signUserOut}
            >
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
