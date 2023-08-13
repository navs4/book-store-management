import BookStyles from "../assets/BookCard.module.css";
import Pricing from "../components/Pricing";

function BookCard(props) {
    return <div className={BookStyles.bookCard}>
            <img src={props.bookInfo.src} alt={props.bookInfo.name}/>
            <p>{props.bookInfo.name}</p>
            <Pricing price={props.bookInfo.price} currency={props.bookInfo.currency}/>
    </div>
}



export default BookCard;