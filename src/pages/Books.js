import Table from "../components/Table";
import BookCard from "../components/BookCard";
import BooksStyles from "../assets/Books.module.css"

const books = [
    {
        "id": "1",
        "name": "Wings of fire",
        "src":  "/books/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg",
        "rating": 1,
        "price": 200,
        "currency": "Rs"
    },

    {
        "id": "2",
        "name": "Harry Potter",
        "src":  "/books/potter.avif",
        "rating": 2,
        "price": 2050,
        "currency": "Rs"
    },

    {
        "id": "3",
        "name": "Dusk Till Dawn",
        "src":  "/books/dusk till dawn.jpg",
        "rating": 2,
        "price": 1000,
        "currency": "Rs"
    },

    {
        "id": "4",
        "name": "Speak less shit !",
        "src":  "/books/speak.jpg",
        "rating": 5,
        "price": 300,
        "currency": "Rs"
    },

    {
        "id": "5",
        "name": "Half girlfriend !",
        "src":  "/books/speak.jpg",
        "rating": 4,
        "price": 400,
        "currency": "Rs"
    }
]



const headers = [
    {
        "id": "1",
        "label": "id"
    },

    {
        "id": "2",
        "label": "name"
    }
];



function Books() {
    return <div className={BooksStyles.books}>
        {
            books.map((e) => {
                return <BookCard bookInfo={e} />
            })
        }
    </div>

}


export default Books;