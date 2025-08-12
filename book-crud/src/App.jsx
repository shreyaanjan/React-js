import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./config/firebase"

const App = () => {
    const [input, setInput] = useState({ name: '', author: '', isBn: '' })
    const [isEdit, setIsEdit] = useState(null)
    const [books, setBooks] = useState([])

    useEffect(() => {
        displayBook()
    }, [])

    const addBook = async () => {
        try {
            const bookRef = await addDoc(collection(db, "books"), input)
            console.log(bookRef);
            setInput({ name: '', author: '', isBn: '' })
            displayBook()
        } catch (error) {
            console.log(error);
        }
    }

    const displayBook = async () => {
        try {
            const bookSnapshot = await getDocs(collection(db, "books"))
            let bookData = bookSnapshot.docs.map((book) => {
                return {
                    id: book.id,
                    ...book.data()
                }
            })
            setBooks(bookData);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteBook = async (id) => {
        try {
            await deleteDoc(doc(db, "books", id))
            displayBook()
        } catch (error) {
            console.log(error);
        }
    }
    console.log(isEdit);

    const updateBook = async () => {
        try {
            await updateDoc(doc(db, "books", isEdit), input)
            displayBook()
            setInput({ name: '', author: '', isBn: '' })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <div>
                    <label htmlFor="name">Book Name : </label>
                    <input type="text" value={input.name} id="name" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
                </div>
                <br />
                <div>
                    <label htmlFor="author">Author Name : </label>
                    <input type="text" value={input.author} id="author" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
                </div>
                <br />
                <div>
                    <label htmlFor="isBn">ISBN Number: </label>
                    <input type="number" value={input.isBn} id="isBn" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
                </div>
                <br />
                <div>
                    <button onClick={isEdit ? updateBook : addBook}>
                        {isEdit ? "Update" : "Add"} Book</button>
                </div>
            </div>
            <br /><br />
            <table border="2" width="700px" cellPadding="5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>ISBN Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, idx) => {
                            return <tr key={book.id}>
                                <td>{idx + 1}</td>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.isBn}</td>
                                <td>
                                    <button onClick={() => {
                                        setIsEdit(book.id)
                                        setInput(book)
                                    }}>Edit</button>
                                    <button onClick={() => deleteBook(book.id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default App