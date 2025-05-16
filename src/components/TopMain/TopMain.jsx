import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function TopMain() {
  return (
        <div className=" flex  pb-7 bg-blue-300">
            <Breadcrumbs/>
            <h1 className="text-2xl">Running</h1>
            <label className="pr-12">
              <span>Sort</span>
              <select name="" id="">
                <option value="">Newest Releases</option>
              </select>
            </label>
          </div>
  )
}
