import MainGrid from "../MainGrid";
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import SuperHeader from "../SuperHeader";
import TopMain from "../TopMain/TopMain";

export default function App() {
  return (
    <div className="flex flex-col">
        <SuperHeader/>
        <Navbar/>
        <TopMain/>
        <div className="flex flex-1">
        <MainGrid/>
        </div>
    </div>
  )
}
