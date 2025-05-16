import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SideBarList from "../SideBarList/SideBarList";

export default function Sidebar() {
  return (
      <aside className="w-62 bg-amber-400 flex flex-col items-center pl-8">
        <SideBarList />
      </aside>

  );
}
