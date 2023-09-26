import { useState } from "react";
import Styles from '../assets/Form.module.css';



function CustomDetails() {
    const [formData, setFormData] = useState({ name: "", email: "", contactNumber: "" });



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFromData) => ({ ...prevFromData, [name]: value }));

    }

    return <div>
        <form>

            <div className={Styles.formGroup}>
                <label>Name: </label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
            </div>


            <div className={Styles.formGroup}>
                <label>Email: </label>
                <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
            </div>


            <div className={Styles.formGroup}>
                <label>Contact Number: </label>
                <input type="text" name="contactNumber" id="contactNumber" value={formData.contactNumber} onChange={handleChange} />
            </div>
        </form>

    </div>
}



export default CustomDetails;