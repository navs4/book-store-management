import BookStyles from "../assets/BookCard.module.css";
import Pricing from "../components/Pricing";
import { useNavigate } from "react-router-dom"




function BookCard(props) {
    const navigate = useNavigate();


    return <div className={BookStyles.bookCard} onClick={() => navigate(`/books/${props.bookInfo.id}`, { state: { data: props.bookInfo } })}>
        <img src={props.bookInfo.src} alt={props.bookInfo.name} />
        <p>{props.bookInfo.name}</p>
        <Pricing price={props.bookInfo.price} currency={props.bookInfo.currency} />
    </div>
}



export default BookCard;