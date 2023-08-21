import styles from '../assets/BookDetails.module.css';
import CartTransitionView from "../components/CartTransitionView";


function BookDetails(props) {
    return <div className={styles.bookDetails}>
        <div>
            <img src={props.data.data.src} alt={props.data.data.name} />
        </div>
        <div>
            <span>Authorized By: {props.data.data.author}</span>
            <p>{props.data.data.description}</p>
        </div>
        <div>
           <CartTransitionView/>
        </div>


    </div>
}

export default BookDetails;