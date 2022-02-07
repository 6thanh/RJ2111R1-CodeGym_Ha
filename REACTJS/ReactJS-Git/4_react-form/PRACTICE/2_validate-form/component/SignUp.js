import { useState } from "react";

function SignUp() {
    const MESSAGE_ERROR = {
        username: 'Username error',
        email: 'Email error',
        password: 'Password error',
        confirmPassword: 'Password must be the same'
    }
    const REGEX = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{3,}$/      
    }
    const [form,setForm] = useState({});

    const handleChange = (event) => {
        let error = '';

        if (event.target.name === 'password') {
            if (form.confirmPassword && form.confirmPassword.value) {
                error = event.target.value === form.confirmPassword.value ? '' : MESSAGE_ERROR[event.target.name];
            } else {
                error = REGEX[event.target.name].test(event.target.value) ? '' : MESSAGE_ERROR[event.target.name];
            }
        } else if (event.target.name === 'confirmPassword') {
            error = event.target.value === form.password.value ? '' : MESSAGE_ERROR[event.target.name];
        } else {
            error = REGEX[event.target.name].test(event.target.value) ? '' : MESSAGE_ERROR[event.target.name];
        }

        setForm({...form,
        [event.target.name]: {value: event.target.value, error: error}});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let isValid = (form.username.value && form.email.value && form.password.value && form.confirmPassword.value);
        let isError = (form.username.error || form.email.error || form.password.error || form.confirmPassword.error);

        if (isValid && isError) {
            alert(`Successful, your info: ${form.username}, ${form.email}, ${form.password}`);
        } else {
            alert ("Please fill full the information")
        }} 

    return (
        <form onSubmit={handleSubmit} className="container">
            <h1>Sign Up</h1>
            <div className={`custom-input ${form.username && form.username.error && 'custom-input-error'}`}>
                <label for="name">Username </label>
                <input name="name" type={"text"} id="name" onChange={handleChange} placeholder="Your name" required></input>
                {form.username && form.username.error && <p className="error">Username error</p>}
                <br></br>
            </div>
            <div className={`custom-input ${form.email && form.email.error && 'custom-input-error'}`}>
                <label for="email">Email </label>
                <input name="email" type={"email"} id="email" onChange={handleChange} placeholder="Enter email" required></input>
                {form.email && form.email.error && <p className="error">Email error</p>}
                <br></br>
            </div>
            <div className={`custom-input ${form.password && form.password.error && 'custom-input-error'}`}>
                <label for="pass">Password </label>
                <input name="password" type={"password"} id="pass" onChange={handleChange} placeholder="Password" required></input>
                {form.password && form.password.error && <p className="error">Password Error</p>}
                <br></br>
            </div>
            <div className={`custom-input ${form.confirmPassword && form.confirmPassword.error && 'custom-input-error'}`}>
                <label for="rePass">Confirm Password </label>
                <input name="confirmPassword" type={"password"} id="rePass" onChange={handleChange} placeholder="Repeat Password" required></input>
                {form.confirmPassword && form.confirmPassword.error && <p className="error">Confirm Password Error</p>}
                <br></br>
            </div>

            <input type={"submit"}></input>
            <input type={"reset"}></input>
        </form>
    );
};

export default SignUp;