import { useState } from "react";
import styles from "../assets/Checkout.module.css";
import PaymentDetails from "./PaymentDetails";
import AddressDetails from "./AddressDetails";
import CustomDetails from "./CustomerDetails";

function Checkout() {
    const [active, setActive] = useState("Customer Details");


    const toggleAction = (tab) => {
        setActive(tab);
    }

    return <div>
        <ul>
            <li>
                <a className={active == 'Customer Details' ? styles.active : ''} onClick={() => toggleAction('Customer Details')}>Customer Details</a>
            </li>

            <li>
                <a className={active == 'Address' ? styles.active : ''} onClick={() => toggleAction('Address')}>Address</a>
            </li>



            <li>
                <a className={active == 'Payment Details' ? styles.active : ''} onClick={() => toggleAction('Payment Details')}>Payment Details</a>
            </li>

        </ul>


        {
            active == 'Payment Details' && <PaymentDetails />
        }

        {
            active == 'Address' && <AddressDetails />
        }


        {
            active == 'Customer Details' && <CustomDetails />
        }

    </div>
}


export default Checkout;