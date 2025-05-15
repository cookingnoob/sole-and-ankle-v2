import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

import Sidebar from "../Sidebar";
export default function MainGrid() {
  return (
    <div className="mt-16">
      <div className="flex">
        <Sidebar />
        <div className="px-20 bg-amber-500">
          <div className=" flex justify-between pb-7 bg-blue-300">
            <h1 className="text-2xl">Running</h1>
            <label className="pr-12">
              <span>Sort</span>
              <select name="" id="">
                <option value="">Newest Releases</option>
              </select>
            </label>
          </div>
          <main className="flex bg-red-200 flex-wrap gap-8">
            {SHOES.map((shoe) => (
              <ShoeCard key={shoe.slug} shoe={shoe} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
