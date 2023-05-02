import {useEffect, useState} from "react"

//Usestate som hanterar böckerna som vi sedan kan arbeta med
const Books = () => {
    const [books, setBooks] = useState([])
    
    //Inhämtar direkt information vid sidladdning från databasen
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await.get("http://localhost:8800/books");

            }
        }
    })
}


export default Books
