import {useState} from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const MyForm = () => {
    const attrSchema = Yup.object().shape({
        name: Yup.string().min(2).max(100).required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().min(10).max(11).required('Required'),
        message: Yup.string().min(5).max(100)
    })
    let [form, setForm] = useState({})
    
    return (
        <div>
            <h1>Contact Form</h1>
            <Formik
                initialValues={form}
                validationSchema={attrSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({errors, touched}) => (
                    <Form>
                            <h2>Name</h2>
                            <Field name="name" />
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                            <h2>Email</h2>
                            <Field type="email" name="email" />
                            <p>{errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}</p>
                            <h2>Phone</h2>
                            <Field type="number" name="phone" />
                            <p>{errors.phone && touched.phone ? (
                                <div>{errors.phone}</div>
                            ) : null}</p>
                            <h2>Message</h2>
                            <Field name="message" />
                            <p>{errors.message && touched.message ? (
                                <div>{errors.message}</div>
                            ) : null}</p>
                        <button type="submit"> Submit </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default MyForm;