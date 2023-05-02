import {useEffect, useState} from "react"
import axios from "axios";
import {Link} from "react-router-dom"

//Usestate som hanterar böckerna som vi sedan kan arbeta med
const Books = () => {
    const [books, setBooks] = useState([])

    //Inhämtar direkt information vid sidladdning från databasen
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        fetchAllBooks();
    }, [])

    const handleDelete = async (id) => {
       try {
        await axios.delete(`http://localhost:8800/books/${id}`)
        window.location.reload()
       }catch (err) {
        console.log(err)
       }
    }

    return (
        <div>
            <h1>Richard´s Book shop</h1>
            <div className="books">
                {books.map((book) => (
                    <div key={book.id} className="book">
                        <img src={book.cover} alt="" className="profile-photo" />
                        <h3>{book.title}</h3>
                        <p>{book.about}</p>
                        <span>{book.price} Kr</span>
                        <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
                        <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
                    </div>



                ))}
            </div>
            <button className="addHome"><Link to="/add">Add new book</Link></button>
        </div>
    )
}


export default Books
