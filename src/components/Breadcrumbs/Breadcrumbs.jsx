import Link from "../LinkList";

export default function Breadcrumbs() {
  return (
    <nav >
      <ol className="flex gap-2">
        <Link name={'Home'}/>
        <Link name={'Sale'}/>
        <Link name={'Shoes'}/>
      </ol>
    </nav>
  )
}
