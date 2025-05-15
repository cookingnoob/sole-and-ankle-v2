import Link from "../LinkList";

export default function Breadcrumbs() {
  return (
    <nav >
      <ol className="flex gap-2 ">
        <Link className="text-sm after:content-['/'] " name={'Home'}/>
        <Link className='text-sm after:content-["/"]'name={'Sale'}/>
        <Link className='text-sm'name={'Shoes'}/>
      </ol>
    </nav>
  )
}
