import { AiOutlineDown } from "react-icons/ai";

interface Item {
  name: string;
  submenu: boolean;
}

export const MenuItem = ({ name, submenu }: Item) => {
  return (
    <div className="flex justify-between w-full items-center">
      <span className="text-[15px] ml-4 font-bold">{name}</span>

      {submenu && (
        <AiOutlineDown
          className="w-4 h-4 transition-transform text-sm"
          name="arrow"
        />
      )}
    </div>
  );
};
