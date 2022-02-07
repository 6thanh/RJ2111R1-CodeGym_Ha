import { useState } from "react";

function SignUp() {
    const [form,setForm] = useState({});

    const submitHandler = (event) => {
        event.preventDefault();
        alert(`Your info: ${form.name}, ${form.email}, ${form.password}`);
    }

    const handleChange = (event) => {
        setForm({...form,
        [event.target.name]: event.target.value})
    }

    const confirmPassword = (event) => {
        if (form.password !=null && event.target.value != null) {
            if (form.password !== event.target.value) {
               document.getElementById('errorPass').innerText = "Wrong Password";
               document.getElementById('errorPass').style.color = "red";
            } else {
               document.getElementById('errorPass').innerText = "";
            }
        }
    }

    return (
        <form onSubmit={submitHandler} className="container">
            <h1>Sign Up</h1>
            <label for="name">Username </label>
                <input name="name" type={"text"} id="name" onChange={handleChange} placeholder="Your name" required></input>
                <br></br>
            <label for="email">Email </label>
                <input name="email" type={"email"} id="email" onChange={handleChange} placeholder="Enter email" required></input>
                <br></br>
            <label for="pass">Password </label>
                <input name="password" type={"password"} id="pass" onChange={handleChange} placeholder="Password" required></input>
                <br></br>
            <label for="rePass">Confirm Password </label>
                <input name="rePassword" type={"password"} id="rePass" onChange={confirmPassword} placeholder="Repeat Password" required></input>
                <span style={{fontSize: "8px"}} id="errorPass"></span>
                <br></br>
            <input type={"submit"}></input>
            <input type={"reset"}></input>
        </form>
    );
};

export default SignUp;