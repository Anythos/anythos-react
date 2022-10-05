import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import React, { MouseEventHandler, useState } from "react";

interface Item {
  name: string;
  submenu?: boolean;
  isExpanded?: boolean;
  handleClick?: () => void;
}

export const MenuItem = ({ name, submenu, isExpanded }: Item) => {
  return (
    <div className="flex justify-between w-full items-center">
      <span className="text-[15px] ml-4 font-bold">{name}</span>

      {submenu &&
        (isExpanded ? (
          <AiOutlineUp
            className="w-4 h-4 transition-transform text-sm"
            name="arrow"
          />
        ) : (
          <AiOutlineDown
            className="w-4 h-4 transition-transform text-sm"
            name="arrow"
          />
        ))}
    </div>
  );
};
