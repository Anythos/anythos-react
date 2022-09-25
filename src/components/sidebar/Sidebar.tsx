import { AiOutlineUser, AiOutlineHome, AiOutlineDown } from "react-icons/ai";
import { FaHandsHelping, FaUsers } from "react-icons/fa";
import { MdSchool, MdOutlineLiveHelp } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";

function Sidebar() {
  return (
    <aside className="absolute flex flex-col w-72 h-screen bg-zinc-800 border-r ">
      <nav className="overflow-y-auto border-r border-black-300">
        <div className="flex flex-col items-center mt-6 mb-3">
          {/*TODO:(Optional) Photo Upload Functionality*/}
          <img
            className="object-cover w-20 h-20 rounded-full items-center text-white"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="Photo"
          />
          <h4 className="mx-2 mt-4 mb-5 font-medium text-sm text-gray-400 hover:underline">
            Name Surname
          </h4>
        </div>

        {/*without submenu*/}
        <div className="p-2 mt-1 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black ">
          <AiOutlineHome className="w-5 h-5 text-gray-400" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 font-bold">Home</span>
          </div>
        </div>

        {/*with submenu*/}
        <div className="p-2 mt-1 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black ">
          <AiOutlineUser className=" w-5 h-5 text-rose-400" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 font-bold">My Profile</span>
            <AiOutlineDown
              className="w-4 h-4 transition-transform text-sm"
              id="arrow"
            />
          </div>
        </div>

        {/*Submenu*/}
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            Personal Information
          </h1>
        </div>
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            Messages
          </h1>
        </div>
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            Calendar
          </h1>
        </div>

        <div className="my-5 mx-4 bg-gray-600 h-[1px]"></div>

        <div className="p-2 mt-3 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black ">
          <FaHandsHelping className="w-5 h-5 text-sky-500" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 font-bold">HR Services</span>
            <AiOutlineDown
              className=" w-4 h-4 transition-transform text-sm"
              id="arrow"
            />
          </div>
        </div>

        {/*Submenu*/}
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            My Data
          </h1>
        </div>
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            My HR Requests
          </h1>
        </div>
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            HR Portal
          </h1>
        </div>

        <div className="p-2 mt-3 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black ">
          <MdSchool className="w-5 h-5 text-sky-500" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 font-bold">My Learning</span>
            <AiOutlineDown
              className="w-4 h-4 transition-transform text-sm"
              id="arrow"
            />
          </div>
        </div>

        {/*Submenu*/}
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            My Registrations
          </h1>
        </div>
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            Open Courses
          </h1>
        </div>

        <div className="p-2 mt-3 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black hover:transition-all">
          <RiUserStarFill className="w-5 h-5 text-sky-500" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 font-bold">Career</span>
            <AiOutlineDown
              className="w-4 h-4 transition-transform text-sm"
              id="arrow"
            />
          </div>
        </div>

        {/*Submenu*/}
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            My Applications
          </h1>
        </div>
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            Search Jobs
          </h1>
        </div>

        <div className="my-5 mx-4 bg-gray-600 h-[1px]"></div>

        <div className="p-2 mt-3 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black ">
          <FaUsers className="w-5 h-6 text-emerald-500" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 font-bold">Community</span>
            <AiOutlineDown
              className="w-4 h-4 transition-transform text-sm"
              id="arrow"
            />
          </div>
        </div>

        {/*Submenu*/}
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            News and Events
          </h1>
        </div>
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            Groups
          </h1>
        </div>
        <div
          className="text-left text-sm  w-4/5 mx-auto text-gray-400 font-semibold hover:text-black"
          id="submenu"
        >
          <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md ">
            Notice Board
          </h1>
        </div>

        <div className="p-2 mt-3 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black ">
          <BiShoppingBag className="w-5 h-5 text-emerald-500" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 font-bold">Sale Offers</span>
          </div>
        </div>

        <div className="my-5 mx-4 bg-gray-600 h-[1px]"></div>

        <div className="p-2 mt-3 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black">
          <MdOutlineLiveHelp className="w-5 h-5 text-amber-500" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 font-bold">
              Contacts and Support
            </span>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
