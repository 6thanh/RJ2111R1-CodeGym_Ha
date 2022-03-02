import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export function Delete() {
    const [book, setBook] = useState([]);
    const {bookId} = useParams();

    useEffect(()=>{
        if(bookId) {
            axios.get(`http://localhost:3000/book/${bookId}`)
            .then((res)=>{
                console.log(res.data);
                setBook(res.data)
            })
            .catch((err)=>{throw err})
        }
    }, [bookId]);

    const handleSubmit = () => {
        if (bookId) {
            axios.delete(`http://localhost:3000/book/${bookId}`, book)
            .then((res)=>{
                alert('Delete!!!')
            })
            .catch((err)=>{throw err})
        }
    }

    return(
        <div className="container">
            <a href="/">Back to home</a>
            <div>
                <label htmlFor="bookId">ID</label>
                <input type="number" id="bookId" name="id" value={book.id} readOnly/>
            </div>
            <div>
            <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={book.title || ''} readOnly />
            </div>
            <div>
                <label htmlFor="number">Number</label>
                <input type="number" id="number" name="number" value={book.number || ''} readOnly />
            </div>
            <button className="btn btn-danger m-3" onClick={handleSubmit}>Delete</button>
        </div>
    )
}