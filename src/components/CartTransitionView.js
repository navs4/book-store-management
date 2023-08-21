import { useNavigate } from 'react-router-dom';
import styles from '../assets/CartTransitionView.module.css'

function CartTransitionView() {
    const navigate = useNavigate();

    return <div className={styles.cartTransitionView}>
        <div>

        </div>

        <div className={styles.footer}>
            <button>Add to Cart</button>
            <button onClick={() => { navigate("/checkout") }}>Buy Now</button>
        </div>
    </div>
}



export default CartTransitionView;