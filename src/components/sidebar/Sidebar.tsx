import { SidebarHeader } from "./SidebarHeader";
import { Menu } from "./Menu";

function Sidebar() {
  return (
    <aside className="absolute flex flex-col w-72 h-screen bg-zinc-800 border-r">
      <nav className="overflow-y-auto border-r border-black-300 pb-6">
        <SidebarHeader />
        <Menu />
      </nav>
    </aside>
  );
}

export default Sidebar;
