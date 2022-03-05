import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
export const Login = () => {
    // form validate rules
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('Invalid email!').required('Username can not be blank'),
        password: Yup.string().min(4).required('Password can not be blank')
    });
    // form initial values
    const initialValues = {
        username: "",
        password: "",
    };
    // demo account to check
    const adminAccount = {
        username: 'admin@gmail.com',
        password: 'letmein'
    }
    // navigation
    const navigate = useNavigate();
    // check whether account info is correct, if yes, navigate to Home; else, alert to inform wrong account
    const checkAccount = (values) => {
        if (values.username == adminAccount.username && values.password == adminAccount.password) {
            navigate('/employee', {
                state: {
                    username: values.username,
                    password: values.password
                }
            });
        } else {
            alert('Your account does not exist');
        }
    }
    const renderError = (message) => <p className="text-danger">{message}</p>;
    // return element
    return (
        <div className="loginContent container">
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    await checkAccount(values);
                    resetForm();
                }}
            >
                <Form>
                    <div className="field mb-3">
                        <label className="label" htmlFor="username">
                            Username
                        </label>
                        <div className="control">
                            <Field
                                name="username"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                            <ErrorMessage name="username" render={renderError} />
                        </div>
                    </div>
                    <div className="field mb-3">
                        <label className="label" htmlFor="password">
                            Password
                        </label>
                        <div className="control">
                            <Field
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                            />
                            <ErrorMessage name="password" render={renderError} />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}