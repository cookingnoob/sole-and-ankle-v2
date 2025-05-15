import SHOES from "../../data";
import ShoeCard from "../ShoeCard";
import Breadcrumbs from '../Breadcrumbs'
import Sidebar from "../Sidebar";
export default function MainGrid() {
  return (
    <main className="mt-16">
      <div className=" flex justify-between bg-blue-500">
        <Breadcrumbs/>
        <h1 className="text-2xl  bg-red-300">Running</h1>
        <label>
          <span>Sort</span>
          <select name="" id="">
            <option value="">Newest Releases</option>
          </select>
        </label>
      </div>
      <div className="flex">
        <Sidebar/>
        <div className="flex flex-wrap gap-8 justify-center">
          {SHOES.map((shoe) => (
            <ShoeCard key={shoe.slug} shoe={shoe} />
          ))}
        </div>
      </div>
    </main>
  );
}
