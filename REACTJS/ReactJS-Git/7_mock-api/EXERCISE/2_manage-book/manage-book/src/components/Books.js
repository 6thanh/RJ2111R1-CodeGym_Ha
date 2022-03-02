import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }
    
    componentDidMount(){
        axios.get('http://localhost:3000/book')
        .then((res)=>{
            this.setState({books: res.data}) 
        })
        .catch((err)=>{throw err})
    }
    
    render(){
        const {books} = this.state;
        return(
            <div className="container m-auto">
                <h1 className="text-center">Library</h1>
                <a href="/books/add"><button className="btn btn-primary m-3">Add</button></a>
                <table className="table-primary container-sm">
                    <thead className="table-bordered">
                        <tr className="list">
                            <th className="text-center">Id</th>
                            <th>Title</th>
                            <th>Number</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) =>(
                            <tr key={book.id}>
                                <td className="text-center">{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.number}</td>
                                <td className="text-center">
                                    <a href={`books/edit/${book.id}`}><button className="btn btn-success m-2">Edit</button></a>
                                    <a href={`books/delete/${book.id}`}><button className="btn btn-danger m-2">Delete</button></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) 
    }


}
export default Books;