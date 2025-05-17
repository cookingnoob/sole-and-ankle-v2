import Link from "../LinkList";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav className="border-b-1 border-b-gray-three items-baseline pt-5 h-18 px-8 flex">
      <div className="flex-1">
        <Logo className={'font-extrabold text-2xl'}/>
        </div>
      <ol className="flex ml-12 gap-12">
        <Link name={'SALE'} className={'text-secondary-blue'}/>
        <Link name={'NEW RELEASES'} />
        <Link name={'MEN'} />
        <Link name={'WOMEN'} />
        <Link name={'KIDS'} />
        <Link name={'COLLECTIONS'} />
      </ol>
      <div className="flex-1"></div>
    </nav>
  )
}



