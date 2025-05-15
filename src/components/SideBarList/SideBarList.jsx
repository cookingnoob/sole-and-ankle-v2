import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Link from "../LinkList";

export default function SideBarList() {
  return (
        <ol className=" mt-9 leading-[2]" >
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
