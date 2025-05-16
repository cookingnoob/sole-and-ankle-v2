import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

import Sidebar from "../Sidebar";
export default function MainGrid() {
  return (

      <div className="flex">
        <Sidebar />
          <main className="flex flex-wrap gap-8">
            {SHOES.map((shoe) => (
              <ShoeCard key={shoe.slug} shoe={shoe} />
            ))}
          </main>
      </div>

  );
}
