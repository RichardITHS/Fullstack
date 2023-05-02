//Import av axios då vi på denna sidan kommer att göra en POST
import axios from "axios"
//När vi lagt till en ny bok så updateras vårt "book" state (vår array), därav använder vi usestate
import {useState} from "react"
import { useNavigate } from "react-router-dom"

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        about: "",
        price: null,
        cover: ""
    })
    const [error, setError]=useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}));

    }
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
            
        </div>
    )
}
export default Add
