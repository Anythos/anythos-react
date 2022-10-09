import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaHandsHelping, FaUsers } from "react-icons/fa";
import { MdOutlineLiveHelp, MdSchool } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { SubMenuItem } from "./SubMenuItem";
import { MenuItem } from "./MenuItem";
import React from "react";
import { DropDown } from "./DropDown";

export function Menu() {
  const mainStyle =
    "p-1 mt-4 flex items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black";

  const Separator = () => {
    return <div className="my-5 mx-4 bg-gray-600 h-[1px]"></div>;
  };

  return (
    <>
      {/*Home*/}
      <div className={mainStyle}>
        <AiOutlineHome className="w-5 h-5 text-gray-400" />
        <MenuItem name="Home" />
      </div>

      {/*My Profile*/}
      <DropDown
        name="My Profile"
        icon={<AiOutlineUser className=" w-5 h-5 text-rose-400" />}
      >
        <SubMenuItem name="Personal Information" />
        <SubMenuItem name="Messages" />
        <SubMenuItem name="Calendar" />
      </DropDown>

      <Separator />

      {/*HR Services*/}
      <DropDown
        name="HR Services"
        icon={<FaHandsHelping className="w-5 h-5 text-sky-500" />}
      >
        <SubMenuItem name="My Data" />
        <SubMenuItem name="My HR Requests" />
        <SubMenuItem name="HR Portal" />
      </DropDown>

      {/*My Learning*/}
      <DropDown
        name="My Learning"
        icon={<MdSchool className="w-5 h-5 text-sky-500" />}
      >
        <SubMenuItem name="My Registrations" />
        <SubMenuItem name="Open Courses" />
      </DropDown>

      {/*Career*/}
      <DropDown
        name="Career"
        icon={<RiUserStarFill className="w-5 h-5 text-sky-500" />}
      >
        <SubMenuItem name="My Applications" />
        <SubMenuItem name="Search Jobs" />
      </DropDown>

      <Separator />

      {/*Community*/}
      <DropDown
        name="Community"
        icon={<FaUsers className="w-5 h-6 text-emerald-500" />}
      >
        <SubMenuItem name="News and Events" />
        <SubMenuItem name="Groups" />
        <SubMenuItem name="Notice Board" />
      </DropDown>

      {/*Sale Offers*/}
      <div className={mainStyle}>
        <BiShoppingBag className="w-5 h-5 text-emerald-500" />
        <MenuItem name="Sale Offers" submenu={false} />
      </div>

      <Separator />

      {/*Contacts & Support*/}
      <div className={mainStyle}>
        <MdOutlineLiveHelp className="w-5 h-5 text-amber-500" />
        <MenuItem name="Contacts & Support" submenu={false} />
      </div>
    </>
  );
}
