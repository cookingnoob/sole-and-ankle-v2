
import Searchbar from "../SearchBar/Searchbar";
import { ShoppingBag } from "react-feather";
export default function SuperHeader() {
  return (
    <div className="bg-gray-nine px-8 gap-6 h-11 text-white flex items-center justify-between">
      <span className="mr-auto text-sm">Free shipping on domestic orders over $75!</span>

         <Searchbar/>
          <a href="" className="text-gray-three">Help</a>
          <ShoppingBag className="size-6 text-gray-three"/>
    </div>
  )
}
