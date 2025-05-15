import Link from "../LinkList";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav className="mb-1" >
      <Logo/>
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



