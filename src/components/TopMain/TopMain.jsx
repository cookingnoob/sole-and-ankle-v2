import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { ChevronDown } from "react-feather";
export default function TopMain() {
  return (
        <div className=" flex pb-7 pt-18">
            <Breadcrumbs/>
            <div className="flex justify-between px-7.5 flex-1">
            <h1 className="text-2xl">Running</h1>
            <label className="relative">
              <span className="text-gray-seven text-base pr-3">Sort</span>
              <select name="" className=" appearance-none bg-gray-one text-gray-nine pt-3 rounded-lg pr-11 pb-3 pl-4">
                <option value="">Newest Releases</option>
              </select>
                <ChevronDown className="absolute size-5 right-4 top-3.5"/>
            </label>
            </div>
          </div>
  )
}
