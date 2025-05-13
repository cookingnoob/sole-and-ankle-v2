import MainGrid from "../MainGrid";
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import SuperHeader from "../SuperHeader";

export default function App() {
  return (
    <div>
        <SuperHeader/>
        <Navbar/>
        <Sidebar/>
        <MainGrid/>
    </div>
  )
}
