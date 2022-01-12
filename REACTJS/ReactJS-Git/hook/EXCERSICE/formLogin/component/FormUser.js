import {useState, useEffect} from 'react';

const FormUser = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
        setName(name);
        setPassword(password);
    },[])

    const updateUser = () => {
        let msg = `Your information: name: ${name} and password: ${password}`;
        alert(msg);
    }

    return (
        <div className='container w-25 mt-5'>
            <input type={'text'} placeholder='Enter user name' onChange={(e) => {setName(e.target.value)}}></input>
            <br></br>
            <input type={'password'} placeholder='Enter password' onChange={(e) => {setPassword(e.target.value)}}></input>
            <br></br>
            <input type={'button'} value={'Login'} onClick={updateUser}></input>
        </div>
    )
};

export default FormUser;