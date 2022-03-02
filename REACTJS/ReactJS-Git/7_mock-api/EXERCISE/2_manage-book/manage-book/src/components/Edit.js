import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export function Edit() {
    const [book, setBook] = useState([]);
    const {bookId} = useParams();
    // const [create, setCreate] = useState(!bookId);

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

    const handleChange = (e) =>{
        setBook({...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (bookId) {
            axios.put(`http://localhost:3000/book/${bookId}`, book)
            .then((res)=>{
                alert('Success!!!');            
            })
            .catch((err)=>{throw err})
        }
    }

    return(
        <div className="container">
            <a href="/">Back to home</a>
            <div>
                <label htmlFor="bookId">ID</label>
                <input type="number" id="bookId" name="id" value={book.id || ''} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={book.title || ''} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="number">Number</label>
                <input type="number" id="number" name="number" value={book.number || ''} onChange={handleChange} required />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
        </div>
    )
}