import axios from "axios";
import React, { useEffect, useState } from "react"

export function Add() {
    const [book, setBook] = useState([]);    

    const handleChange = (e) =>{
        setBook({...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        axios.post('http://localhost:3000/book/', book)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{throw err})
    }

    return(
        <div className="container">
            <a href="/">Back to home</a>
            <div>
                <label htmlFor="bookId">ID</label>
                <input type="number" id="bookId" name="id" onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="number">Number</label>
                <input type="number" id="number" name="number" onChange={handleChange} required />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
        </div>
    )
}