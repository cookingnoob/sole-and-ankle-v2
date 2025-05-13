import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

export default function MainGrid() {
  return (
    <main>
      <div>
        <h1>Running</h1>
         <label>
          <span>Sort</span>
          <select name="" id="">
            <option value="">Newest Releases</option>
          </select>
         </label>
      </div>

      <div>
      {
        SHOES.map(shoe => (
          <ShoeCard key={shoe.slug} shoe={shoe}/>
        ))
      }
      </div>
    </main>
  )
}
