import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SideBarList from "../SideBarList/SideBarList";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center pl-8">
      <Breadcrumbs/>
      <aside className="">
        <SideBarList />
      </aside>
    </div>
  );
}
