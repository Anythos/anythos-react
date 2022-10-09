import React, { ReactNode, useState } from "react";
import { MenuItem } from "./MenuItem";

export type MenuProps = {
  name: string;
  icon: ReactNode;
  children: JSX.Element[];
};

export function DropDown({ name, icon, children }: MenuProps) {
  const [expanded, setExpanded] = useState(false);

  const handleSetExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <button
        onClick={handleSetExpanded}
        className="p-1 mt-4 flex w-full items-center text-gray-300 rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-200 hover:text-black"
      >
        {icon}
        <MenuItem name={name} submenu={true} isExpanded={expanded} />
      </button>
      {expanded && <>{children}</>}
    </>
  );
}
