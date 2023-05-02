//Import av axios då vi på denna sidan kommer att göra en POST
import axios from "axios"
//När vi lagt till en ny bok så updateras vårt "book" state (vår array), därav använder vi usestate
import {useState} from "react"
import { useNavigate, Link } from "react-router-dom"

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        about: "",
        price: null,
        cover: ""
    })
    const [error, setError]=useState(false);

    const navigate = useNavigate();

    //Tar in allt som skrivs i varje input
    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}));

    }
    //Tar all information som skrivits in och skapar en POST
    const handleClick = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/books", book);
            navigate("/");
        }catch (err) {
            console.log(err)
            setError(true)
        }
    }
    return (
        <div className="form">
            <h1>Add a new book</h1>
            <input type="text" placeholder="Book title" name="title" onChange={handleChange}/>
            <input type="textarea" placeholder="Description" name="about" onChange={handleChange}/>
            <input type="number" placeholder="Book Price" name="price" onChange={handleChange}/>
            <input type="text" placeholder="Book cover" name="cover" onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
            {error && "Something is wrong"}
            <Link to="/">See all books</Link>
        </div>
    )
}
export default Add
