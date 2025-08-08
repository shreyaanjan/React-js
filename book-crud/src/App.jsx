import { addDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./config/firebase"

const App = () => {
    const [input, setInput] = useState({ book: '', name: '', isBn: '' })
    const [books, setBooks] = useState([])

    const addBook = async () => {
        const bookRef = await addDoc(collection(db, "books"), input)
        console.log(bookRef);
        setInput({ book: '', name: '', isBn: '' })
        displayBook()
    }

    const displayBook = async () => {
        const bookSnapshot = await getDocs(collection(db, "books"))
        let bookData = bookSnapshot.docs.map((book) => {
            return {
                id: book.id,
                ...book.data()
            }
        })
        setBooks(bookData);
    }

    useEffect(() => {
        displayBook()
    }, [])

    return (
        <div>
            <div>
                <div>
                    <label htmlFor="book">Book Name : </label>
                    <input type="text" value={input.book} id="book" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
                </div>
                <br />
                <div>
                    <label htmlFor="book">Author Name : </label>
                    <input type="text" value={input.name} id="name" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
                </div>
                <br />
                <div>
                    <label htmlFor="book">ISBN Number: </label>
                    <input type="number" value={input.isBn} id="isBn" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
                </div>
                <br />
                <div>
                    <button onClick={addBook}>Add Book</button>
                </div>
            </div>
            {
                books.map((book) => {
                    return <div key={book.id}>
                        <h3>{book.book} - {book.name}</h3>
                        <p>{book.isBn}</p>
                    </div>
                })
            }
        </div>
    )
}

export default App