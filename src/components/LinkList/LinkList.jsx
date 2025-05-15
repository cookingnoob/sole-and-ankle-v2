export default function Link({name, href='/', className}){
    return <li>
                <a className={className} href={href}>{name}</a>
            </li>
}