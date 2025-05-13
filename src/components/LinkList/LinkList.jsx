export default function Link({name, href='/'}){
    return <li>
                <a href={href}>{name}</a>
            </li>
}