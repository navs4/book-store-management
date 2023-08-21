import { useLocation } from "react-router-dom";
import BookDetails from "../components/BookDetails";



function BookDetailsPage() {
    const location = useLocation();
    const bookInfo = location.state;

    return <BookDetails data={bookInfo}/>
}



export default BookDetailsPage;