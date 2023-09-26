
import { useState } from "react";
import Styles from '../assets/Form.module.css';


function AddressDetails() {

    const [formData, setFormData] = useState({ address: "", street: "", locality: "" });



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFromData) => ({ ...prevFromData, [name]: value }));

    }

    return <div>
        <form>

            <div className={Styles.formGroup}>
                <label>Locality: </label>
                <textarea type="text" name="street" id="street" value={formData.street} onChange={handleChange} />
            </div>

            <div className={Styles.formGroup}>
                <label>Street: </label>
                <textarea type="text" name="address" id="address" value={formData.address} onChange={handleChange} />
            </div>


            <div className={Styles.formGroup}>
                <label>Address: </label>
                <textarea type="text" name="locality" id="locality" value={formData.locality} onChange={handleChange} />
            </div>
        </form>

    </div>
}



export default AddressDetails;