import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function TopMain() {
  return (
        <div className=" flex  pb-7 pt-18">
            <Breadcrumbs/>
            <div className="flex justify-between px-7.5 flex-1">
            <h1 className="text-2xl">Running</h1>
            <label className="">
              <span>Sort</span>
              <select name="" id="">
                <option value="">Newest Releases</option>
              </select>
            </label>
            </div>
          </div>
  )
}
