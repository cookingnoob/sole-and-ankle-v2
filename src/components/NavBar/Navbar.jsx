import Link from "../LinkList";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav className="border-b-1 border-b-gray-three relative py-6.5" >
      <div className=" h-[100%] absolute left-8 flex justify-center items-center top-0">
        <Logo className={'font-extrabold text-2xl'}/>
      </div>
      <ol className="flex justify-center gap-5">
        <Link name={'SALE'} className={'text-secondary-blue'}/>
        <Link name={'NEW RELEASES'} />
        <Link name={'MEN'} />
        <Link name={'WOMEN'} />
        <Link name={'KIDS'} />
        <Link name={'COLLECTIONS'} />
      </ol>
    </nav>
  )
}



