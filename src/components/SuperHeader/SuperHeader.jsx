import Link from "../LinkList";
import Searchbar from "../SearchBar/Searchbar";
import { ShoppingBag } from "react-feather";
export default function SuperHeader() {
  return (
    <div className="bg-gray-nine  text-white flex justify-between">
      <span className="pl-8 py-3 text-sm">Free shipping on domestic orders over $75!</span>
      <div className="flex mr-3 py-2 gap-6 text-gray-three">
         <Searchbar/>
          <Link className={''} name={'Help'}/>
          <ShoppingBag className="size-6 "/>
      </div>
    </div>
  )
}
