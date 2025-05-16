import Link from "../LinkList";

export default function Breadcrumbs() {
  return (
      <nav className="w-62 pl-8">
        <ol className="flex gap-2 ">
          <Link
            className="text-sm after:content-['/'] text-gray-seven"
            name={"Home"}
          />
          <Link
            className='text-sm after:content-["/"] text-gray-seven'
            name={"Sale"}
          />
          <Link className="text-sm text-gray-seven" name={"Shoes"} />
        </ol>
      </nav>

  );
}
