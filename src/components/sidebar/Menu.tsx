import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaHandsHelping, FaUsers } from "react-icons/fa";
import { MdOutlineLiveHelp, MdSchool } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { SubMenuItem } from "./SubMenuItem";
import { MenuItem } from "./MenuItems";

export function Menu() {
  const mainStyle =
    "p-2 mt-4 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black";

  const Separator = () => {
    return <div className="my-5 mx-4 bg-gray-600 h-[1px]"></div>;
  };

  return (
    <>
      {/*Home*/}
      <div className={mainStyle}>
        <AiOutlineHome className="w-5 h-5 text-gray-400" />
        <MenuItem name="Home" submenu />
      </div>

      {/*My Profile*/}
      <div className={mainStyle}>
        <AiOutlineUser className=" w-5 h-5 text-rose-400" />
        <MenuItem name="My Profile" submenu={true} />
      </div>

      <SubMenuItem name="Personal Information" />
      <SubMenuItem name="Messages" />
      <SubMenuItem name="Calendar" />

      <Separator />

      {/*HR Services*/}
      <div className={mainStyle}>
        <FaHandsHelping className="w-5 h-5 text-sky-500" />
        <MenuItem name="HR Services" submenu={true} />
      </div>

      <SubMenuItem name="My Data" />
      <SubMenuItem name="My HR Requests" />
      <SubMenuItem name="HR Portal" />

      {/*My Learning*/}
      <div className={mainStyle}>
        <MdSchool className="w-5 h-5 text-sky-500" />
        <MenuItem name="My Learning" submenu={true} />
      </div>

      <SubMenuItem name="My Registrations" />
      <SubMenuItem name="Open Courses" />

      {/*Career*/}
      <div className={mainStyle}>
        <RiUserStarFill className="w-5 h-5 text-sky-500" />
        <MenuItem name="Career" submenu={true} />
      </div>

      <SubMenuItem name="My Applications" />
      <SubMenuItem name="Search Jobs" />

      <Separator />

      {/*Community*/}
      <div className={mainStyle}>
        <FaUsers className="w-5 h-6 text-emerald-500" />
        <MenuItem name="Community" submenu={true} />
      </div>

      <SubMenuItem name="News and Events" />
      <SubMenuItem name="Groups" />
      <SubMenuItem name="Notice Board" />

      {/*Sale Offers*/}
      <div className={mainStyle}>
        <BiShoppingBag className="w-5 h-5 text-emerald-500" />
        <MenuItem name="Sale Offers" submenu />
      </div>

      <Separator />

      {/*Contacts & Support*/}
      <div className={mainStyle}>
        <MdOutlineLiveHelp className="w-5 h-5 text-amber-500" />
        <MenuItem name="Contacts & Support" submenu />
      </div>
    </>
  );
}
