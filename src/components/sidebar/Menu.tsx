import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaHandsHelping, FaUsers } from "react-icons/fa";
import { MdOutlineLiveHelp, MdSchool } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { SubMenuItem } from "./SubMenuItem";
import { MenuItem } from "./MenuItem";
import React from "react";
import { MenuProps } from "./DropDown";

export function Menu(props: MenuProps) {
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
        <MenuItem name="Home" />
      </div>

      {/*My Profile*/}
      <div onClick={props.openProfile} className={mainStyle}>
        <AiOutlineUser className=" w-5 h-5 text-rose-400" />
        <MenuItem name="My Profile" isExpanded={props.profile} submenu={true} />
      </div>

      {props.profile && (
        <>
          <SubMenuItem name="Personal Information" />
          <SubMenuItem name="Messages" />
          <SubMenuItem name="Calendar" />
        </>
      )}

      <Separator />

      {/*HR Services*/}
      <div onClick={props.openHr} className={mainStyle}>
        <FaHandsHelping className="w-5 h-5 text-sky-500" />
        <MenuItem name="HR Services" isExpanded={props.hr} submenu={true} />
      </div>

      {props.hr && (
        <>
          <SubMenuItem name="My Data" />
          <SubMenuItem name="My HR Requests" />
          <SubMenuItem name="HR Portal" />
        </>
      )}

      {/*My Learning*/}
      <div onClick={props.openLearning} className={mainStyle}>
        <MdSchool className="w-5 h-5 text-sky-500" />
        <MenuItem
          name="My Learning"
          isExpanded={props.learning}
          submenu={true}
        />
      </div>

      {props.learning && (
        <>
          <SubMenuItem name="My Registrations" />
          <SubMenuItem name="Open Courses" />
        </>
      )}

      {/*Career*/}
      <div onClick={props.openCareer} className={mainStyle}>
        <RiUserStarFill className="w-5 h-5 text-sky-500" />
        <MenuItem name="Career" isExpanded={props.career} submenu={true} />
      </div>

      {props.career && (
        <>
          <SubMenuItem name="My Applications" />
          <SubMenuItem name="Search Jobs" />
        </>
      )}

      <Separator />

      {/*Community*/}
      <div onClick={props.openCommunity} className={mainStyle}>
        <FaUsers className="w-5 h-6 text-emerald-500" />
        <MenuItem
          name="Community"
          isExpanded={props.community}
          submenu={true}
        />
      </div>

      {props.community && (
        <>
          <SubMenuItem name="News and Events" />
          <SubMenuItem name="Groups" />
          <SubMenuItem name="Notice Board" />
        </>
      )}

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
