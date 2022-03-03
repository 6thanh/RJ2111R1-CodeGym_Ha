import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

export const Library = () => {
    const [books, setBooks] = useState([]) 
    const [form, setForm] = useState({})
    const [indexSelected, setIndexSelected] = useState(-1)

    const attrSchema = Yup.object().shape({
        title: Yup.string().min(2).max(100).required('Required'),
        number: Yup.string().min(1).max(3).required("Required")
    })
    
    function handleChange(event) {
        setForm({...form,
        [event.target.name]: event.target.value});
    }

    function handleSelect (book, index) {
        setForm(book)
        setIndexSelected(index)
      }
     
      function handleDelete (index) {
        const newBooks = JSON.parse(JSON.stringify(books))
        newBooks.splice(index, 1)
        setBooks(newBooks)
      }

    function handleSubmit() {
        const newBooks = JSON.parse(JSON.stringify(books))
        if (indexSelected > -1) {
          newBooks.splice(indexSelected, 1, form)
        } else {
          newBooks.push(form)
        }
        setBooks(newBooks)
        setForm({})
        setIndexSelected(-1)
      }

    return (
        <div>
            <h1>Library</h1>
            <Formik
                initialValues={form}
                validationSchema={attrSchema}
                onSubmit={handleSubmit}
            >
                {({errors, touched}) =>(
                  <Form>
                        <label htmlFor="title">Tiêu đề</label>
                        <Field type="text" name="title" id="title" onChange={handleChange} />
                        {errors.title && touched.title ? (
                                    <div>{errors.title}</div>
                                ) : null}
                    
                        <label htmlFor="number">Số lượng</label>
                        <Field type="number" name="number" id="number" onChange={handleChange} />
                        {errors.number && touched.number ? (
                                <div>{errors.number}</div>
                            ) : null}

                        <button type="submit">Submit</button>
                  </Form>  
                )}
            </Formik>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { books.map((book, index) => (
                        <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.number}</td>
                        <td>
                            <button onClick={handleSelect.bind(this, book, index)}>Edit</button>
                            <button onClick={handleDelete.bind(this, index)}>Delete</button>
                        </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
};
