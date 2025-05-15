import { Search } from "react-feather"

export default function Searchbar() {
  return (
     <label className="relative">
        <input type="text" placeholder="Search..." className="pl-6 border-b-gray-three border-b-1"/>
        <div className="absolute top-[-10%] h-[100%] flex items-center justify-center">
        <Search className="  size-4"/>
        </div>
    </label>
  )
}
