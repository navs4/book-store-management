import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

import styles from '../assets/Global.module.css';

function RootLayout() {
    return <div className={styles.align}>
        <Header />
        <Outlet />

        <SideBar />
        {/* <Footer /> */}
    </div>
}



export default RootLayout;



