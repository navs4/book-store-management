import { Link } from "react-router-dom";

import styles from "../assets/SideBar.module.css";

const SIDE_BAR_LINK = [{
    id: "1",
    value: "/orders",
    name: "Orders"
},

{
    id: "2",
    value: "/reports",
    name: "Report"
}
];



function SideBar() {
    return <ul className={styles.sidebar}>
        {SIDE_BAR_LINK.map((e) => {
            return <li>
                <Link to={`${e.value}`}>{e.name}</Link>
            </li>
        })}
    </ul>
}



export default SideBar;