import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

// export function Add() {
    const [book, setBook] = useState([]);
    const {bookId} = useParams();
    const {add} = useParams();
    const [create, setCreate] = useState(!bookId);

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
        if(add) {
            axios.post('http://localhost:3000/book/', book)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{throw err})
        } else {
            if (bookId) {
                axios.put(`http://localhost:3000/book/${bookId}`, book)
                .then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{throw err})
            }
        }
    }

    return(
        <div className="container">
            <a href="/">Back to home</a>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="bookId">Id</label>
                <input type="text" id="bookId" name="Id" value={book.id || ''} onChange={handleChange} />
                <br />
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={book.title || ''} onChange={handleChange} required />
                <br />
                <label htmlFor="number">Number</label>
                <input type="number" id="number" name="number" value={book.number || ''} onChange={handleChange} required />
                <br />
                <input type="submit" value="Edit" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}