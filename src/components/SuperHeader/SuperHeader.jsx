import Link from "../LinkList";
import Searchbar from "../SearchBar/Searchbar";

export default function SuperHeader() {
  return (
    <div className="bg-gray-nine py-3 text-white flex justify-between">
      <span className=" ml-8 text-sm">Free shipping on domestic orders over $75!</span>
      <div className="flex mr-3">
         <Searchbar/>
          <Link className={''} name={'Help'}/>
      </div>
    </div>
  )
}
