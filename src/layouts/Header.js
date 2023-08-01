import { Link } from "react-router-dom";
import styles from '../assets/Header.module.css';


const HEADER_LINK = [{
    id: "1",
    value: "/",
    name: "Home"
},

{
    id: "2",
    value: "/books",
    name: "Books"
}
];


function Header() {
    return <ul className={styles.background}>
        {HEADER_LINK.map((e) => {
            return <li>
                <Link to={`${e.value}`}>{e.name}</Link>
            </li>
        })}
    </ul>
}


export default Header;