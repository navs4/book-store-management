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


    const CHECKOUT_TABS = ['Customer Details', 'Address', 'Payment Details'];


    const tabsHandler = (buttonType) => {

        if (String(buttonType) == 'next') {
            setActive(CHECKOUT_TABS[CHECKOUT_TABS.indexOf(active) + 1]);
        }

        if (String(buttonType) == 'previous') {
            setActive(CHECKOUT_TABS[CHECKOUT_TABS.indexOf(active) - 1]);
        }


    }

    return <div>
        <ul>
            {
                CHECKOUT_TABS.map((tab) => {
                    return (
                        <li>
                            <a className={active == tab ? styles.active : ''} onClick={() => toggleAction(tab)}>{tab}</a>
                        </li>
                    )
                })
            }
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

        <button onClick={() => tabsHandler('previous')}>Previous</button>
        <button onClick={() => tabsHandler('next')}>Next</button>

    </div>
}


export default Checkout;