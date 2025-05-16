import Link from "../LinkList";

export default function Breadcrumbs() {
  return (
      <nav className="w-62 pl-8 00">
        <ol className="flex  mt-2">
          <div className="after:content-['/'] text-gray-three flex gap-2 ">
            <Link
              className="text-sm  text-gray-seven"
              name={"Home"}
            />
          </div>
          <div className="after:content-['/'] flex gap-2 text-gray-three">
          <Link
            className='text-sm text-gray-seven  pl-2 '
            name={"Sale"}
          />
          </div>
          <Link className="text-sm pl-2 text-gray-seven" name={"Shoes"} />
        </ol>
      </nav>

  );
}
