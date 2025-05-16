import Link from "../LinkList";

export default function SideBarList() {
  return (
        <ol className="leading-[2] w-62 pl-8" >
            <Link name='Lifestyle'/>
            <Link name='Jordan'/>
            <Link className={'text-primary-red'} name='Running'/>
            <Link name='Basketball'/>
            <Link name='Training & Gym'/>
            <Link name='Football'/>
            <Link name='Skateboarding'/>
            <Link name='American Football'/>
            <Link name='Baseball'/>
            <Link name='Golf'/>
            <Link name='Tennis'/>
            <Link name='Athletics'/>
            <Link name='Walking'/>
        </ol>
  )
}
